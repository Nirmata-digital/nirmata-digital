import { NextResponse } from "next/server";

/* Visitor counter stored in Upstash Redis (free tier is enough).
   Set these two environment variables in Vercel:
   UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN */
const KEY = "nirmata:visitors";

export async function POST(req: Request) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return NextResponse.json({ error: "Counter not configured" }, { status: 503 });
  }

  let increment = false;
  try {
    const body = await req.json();
    increment = body?.increment === true;
  } catch {}

  try {
    const res = await fetch(`${url}/${increment ? "incr" : "get"}/${KEY}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return NextResponse.json({ error: "Counter unavailable" }, { status: 502 });
    const data = await res.json();
    return NextResponse.json({ count: Number(data.result ?? 0) });
  } catch {
    return NextResponse.json({ error: "Counter unavailable" }, { status: 502 });
  }
}
