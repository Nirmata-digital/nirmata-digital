"use client";

import { useEffect, useState } from "react";

/* Counts one visit per browser session (refreshing the page does not add to it).
   Shows nothing until the count loads, and stays hidden if the counter is not set up. */
export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = sessionStorage.getItem("nd-visit") === "1";
    } catch {}

    fetch("/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ increment: !counted }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.count === "number") {
          setCount(d.count);
          try {
            sessionStorage.setItem("nd-visit", "1");
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/80">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-orange" aria-hidden>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="font-semibold text-white">{count.toLocaleString("en-IN")}</span> visitors
    </span>
  );
}
