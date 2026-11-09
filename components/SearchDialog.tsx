"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { searchIndex } from "@/lib/nav";

export default function SearchDialog({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = term
      ? searchIndex.filter((i) => `${i.label} ${i.group} ${i.text ?? ""}`.toLowerCase().includes(term))
      : searchIndex.slice(0, 8);
    return list.slice(0, 10);
  }, [q]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && results[index]) {
      router.push(results[index].href);
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-navy/60 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5 text-muted" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setIndex(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search services, industries, work…"
            className="w-full bg-transparent text-base text-heading outline-none placeholder:text-muted"
            aria-label="Search"
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">Esc</kbd>
        </div>

        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-4 py-6 text-center text-sm text-muted">No results for “{q}”.</li>}
          {results.map((r, i) => (
            <li key={r.href}>
              <Link
                href={r.href}
                onClick={onClose}
                onMouseEnter={() => setIndex(i)}
                className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 ${
                  i === index ? "bg-soft" : ""
                }`}
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-heading">{r.label}</span>
                  {r.text && <span className="block truncate text-xs text-muted">{r.text}</span>}
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted">{r.group}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}