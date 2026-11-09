import { NextResponse } from "next/server";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string; // honeypot
  source?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: bots fill this field. Pretend success and do nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const name = String(body.name ?? "").trim().slice(0, 100);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const email = String(body.email ?? "").trim().slice(0, 120);
  const service = String(body.service ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  const source = String(body.source ?? "website").slice(0, 50);

  if (name.length < 2 || phone.length < 9 || message.length < 10) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

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