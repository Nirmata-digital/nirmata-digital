import { NextResponse } from "next/server";
import { isHoneypotTripped, rateLimited, verifyTurnstile } from "@/lib/spam";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // 1. Rate limit
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  // 2. Parse body (JSON or form data) into a FormData so spam.ts works for both
  let form: FormData;
  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const json = await req.json();
      form = new FormData();
      for (const [key, value] of Object.entries(json ?? {})) {
        if (value !== undefined && value !== null) form.append(key, String(value));
      }
    } else {
      form = await req.formData();
    }
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // 3. Honeypot: pretend success so bots don't adapt
  if (isHoneypotTripped(form)) {
    return NextResponse.json({ ok: true });
  }

  // 4. Turnstile
  const token = String(form.get("cf-turnstile-response") ?? "") || null;
  const human = await verifyTurnstile(token, ip);
  if (!human) {
    return NextResponse.json({ ok: false, error: "spam_check_failed" }, { status: 400 });
  }

  // 5. Existing validation
  const get = (k: string, max: number) => String(form.get(k) ?? "").trim().slice(0, max);

  const name = get("name", 100);
  const phone = get("phone", 30);
  const email = get("email", 120);
  const service = get("service", 100);
  const message = get("message", 2000);
  const source = String(form.get("source") ?? "website").slice(0, 50);

  if (name.length < 2 || phone.length < 9 || message.length < 10) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // 6. Existing webhook forwarding
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ name, phone, email, service, message, source }),
      redirect: "follow",
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}