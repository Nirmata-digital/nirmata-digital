// Server-side spam checks: honeypot + timing + Cloudflare Turnstile + simple rate limit.

export const HONEYPOT_FIELD = "company_website"; // real users never see or fill this
export const TIMESTAMP_FIELD = "form_ts";

/** Returns true if the submission looks like a bot. */
export function isHoneypotTripped(form: FormData, minSeconds = 3): boolean {
  const trap = String(form.get(HONEYPOT_FIELD) ?? "").trim();
  if (trap) return true;

  const ts = Number(form.get(TIMESTAMP_FIELD));
  if (!ts || Number.isNaN(ts)) return true;
  const elapsed = (Date.now() - ts) / 1000;
  // Too fast (bot) or older than 2 hours (replayed)
  return elapsed < minSeconds || elapsed > 60 * 60 * 2;
}

/** Verifies the Cloudflare Turnstile token on the server. */
export async function verifyTurnstile(token: string | null, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Don't silently allow everything in production if the key is missing.
    if (process.env.NODE_ENV === "production") return false;
    return true; // allow local dev without keys
  }
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

// Basic in-memory rate limit. Fine for one server; on serverless (Vercel)
// use Upstash Redis or Vercel KV for a limit shared across instances.
const hits = new Map<string, number[]>();

export function rateLimited(key: string, max = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > max;
}
