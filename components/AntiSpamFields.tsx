"use client";
import Script from "next/script";
import { useState } from "react";

/**
 * Drop this inside any <form>. It adds:
 *  - a hidden honeypot field
 *  - a form-load timestamp
 *  - the Cloudflare Turnstile widget (only if NEXT_PUBLIC_TURNSTILE_SITE_KEY is set)
 * Turnstile adds a hidden input named "cf-turnstile-response" to the form automatically.
 */
export default function AntiSpamFields() {
  const [ts] = useState(() => String(Date.now()));
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <>
      {/* Honeypot: hidden from people and screen readers, bots fill it in */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Leave this field empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input type="hidden" name="form_ts" value={ts} />

      {siteKey && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={siteKey} data-theme="auto" />
        </>
      )}
    </>
  );
}
