"use client";

import { useEffect, useRef, useState } from "react";

const DONE_KEY = "nd-source";       // saved after an answer
const SKIP_KEY = "nd-source-skip";  // saved after "Skip"
const SKIP_DAYS = 14;               // how long to leave visitors alone after Skip
const DELAY_MS = 4500;              // wait before showing, so it never fights the cookie banner

const options = [
  { id: "google", label: "Google search" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "youtube", label: "YouTube" },
  { id: "referral", label: "Friend or referral" },
  { id: "ad", label: "An online ad" },
  { id: "other", label: "Somewhere else" },
];

/* Pre-select a likely answer from the page the visitor came from. They can change it. */
function guess(): string {
  try {
    const host = new URL(document.referrer).hostname;
    if (host.includes("google")) return "google";
    if (host.includes("instagram")) return "instagram";
    if (host.includes("facebook") || host.includes("fb.")) return "facebook";
    if (host.includes("linkedin") || host.includes("lnkd")) return "linkedin";
    if (host.includes("youtube") || host.includes("youtu.be")) return "youtube";
    if (host.includes("whatsapp")) return "whatsapp";
  } catch {}
  return "";
}

export default function SourceSurvey() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [other, setOther] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "thanks">("idle");
  const firstRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(DONE_KEY)) return;
      const skipped = Number(localStorage.getItem(SKIP_KEY) || 0);
      if (skipped && Date.now() - skipped < SKIP_DAYS * 86400000) return;
    } catch {
      return;
    }
    const t = setTimeout(() => {
      setChoice(guess());
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    firstRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && skip();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function skip() {
    try {
      localStorage.setItem(SKIP_KEY, String(Date.now()));
    } catch {}
    setOpen(false);
  }

  async function submit() {
    if (!choice || state !== "idle") return;
    setState("saving");
    const params = new URLSearchParams(window.location.search);
    const payload = {
      source: choice,
      other: choice === "other" ? other.trim().slice(0, 200) : "",
      page: window.location.pathname,
      utm: params.get("utm_source") || "",
    };
    try {
      await fetch("/api/source", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
    } catch {}
    try {
      localStorage.setItem(DONE_KEY, JSON.stringify({ source: choice, at: Date.now() }));
    } catch {}
    setState("thanks");
    setTimeout(() => setOpen(false), 1400);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/60 p-4 backdrop-blur-sm sm:items-center" onClick={skip}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="source-title"
        onClick={(e) => e.stopPropagation()}
        className="anim-fade w-full max-w-lg rounded-3xl border border-line bg-card p-6 shadow-[0_30px_90px_rgba(10,26,63,0.45)] sm:p-8"
      >
        {state === "thanks" ? (
          <div className="py-8 text-center" role="status">
            <span className="bg-orange-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-full text-navy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            </span>
            <p className="mt-4 text-xl font-semibold text-heading">Thank you</p>
            <p className="mt-1 text-sm text-muted">That helps us a lot.</p>
          </div>
        ) : (
          <>
            <p className="eyebrow text-orange">Welcome</p>
            <h2 id="source-title" className="mt-3 text-2xl font-semibold leading-tight">How did you hear about us?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              It takes one tap and helps us know where to show up. We save only your answer, no name or contact details.
            </p>

            <div role="radiogroup" aria-labelledby="source-title" className="mt-6 grid grid-cols-2 gap-2.5">
              {options.map((o, i) => {
                const on = choice === o.id;
                return (
                  <button
                    key={o.id}
                    ref={i === 0 ? firstRef : undefined}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setChoice(o.id)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition duration-200 ${
                      on
                        ? "border-orange bg-orange/10 text-heading shadow-[0_6px_18px_rgba(255,122,26,0.2)]"
                        : "border-line bg-page text-fg hover:-translate-y-0.5 hover:border-orange/50"
                    } ${o.id === "other" ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>

            {choice === "other" && (
              <input
                value={other}
                onChange={(e) => setOther(e.target.value)}
                maxLength={200}
                placeholder="Tell us where (optional)"
                aria-label="Where did you hear about us?"
                className="mt-3 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25"
              />
            )}

            <div className="mt-6 flex items-center justify-between gap-3">
              <button type="button" onClick={skip} className="px-2 py-2 text-sm font-medium text-muted transition hover:text-heading">
                Skip for now
              </button>
              <button
                type="button"
                onClick={submit}
                disabled={!choice || state === "saving"}
                className="bg-orange-gradient rounded-full px-7 py-3 text-sm font-semibold text-navy shadow-[0_10px_28px_rgba(255,122,26,0.35)] transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {state === "saving" ? "Saving…" : "Continue"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
