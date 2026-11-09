"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "nd-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setVisible(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line bg-card p-5 shadow-2xl md:bottom-6"
    >
      <button
        type="button"
        onClick={() => choose("rejected")}
        aria-label="Close and reject cookies"
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-muted transition hover:bg-soft hover:text-heading"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1 pr-6">
          <p className="text-base font-semibold text-heading">We value your privacy</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            We use cookies to keep the site working and, if you agree, to understand how it is used. You can
            accept or reject them. Read our{" "}
            <Link href="/cookies" className="font-semibold text-orange underline">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-heading transition hover:border-heading"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="bg-orange-gradient rounded-xl px-5 py-2.5 text-sm font-semibold text-navy transition hover:brightness-105"
          >
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
}