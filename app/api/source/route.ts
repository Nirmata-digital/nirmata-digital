import { NextResponse } from "next/server";

const allowed = ["google", "instagram", "facebook", "linkedin", "whatsapp", "youtube", "referral", "ad", "other"];

/* Where answers go:
   - If SOURCE_WEBHOOK_URL is set (Google Sheets script, Zapier, Make, Formspree...), each answer is sent there.
   - If not, the answer is printed to the Vercel function logs so nothing is lost while you set it up. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const source = String(body.source ?? "");
  if (!allowed.includes(source)) return NextResponse.json({ ok: false }, { status: 400 });

  const record = {
    source,
    other: String(body.other ?? "").slice(0, 200),
    page: String(body.page ?? "").slice(0, 200),
    utm: String(body.utm ?? "").slice(0, 100),
    at: new Date().toISOString(),
  };

  const url = process.env.SOURCE_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record) });
    } catch {
      // never block the visitor if the webhook is down
    }
  } else {
    console.log("[source-survey]", JSON.stringify(record));
  }

  return NextResponse.json({ ok: true });
}
