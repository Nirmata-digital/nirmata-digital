"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/* Nicer names for specific URL parts. Anything not listed is made from the URL
   automatically ("free-audit" becomes "Free audit"). */
const labels: Record<string, string> = {
  "free-audit": "Free audit",
  seo: "SEO",
  "local-seo": "Local SEO",
  ml: "ML",
  ai: "AI",
};

/* URL parts that are only folders (no page of their own). They show as plain text. */
const noPage = new Set(["industries"]);

const pretty = (seg: string) =>
  labels[seg] ?? decodeURIComponent(seg).replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

export default function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null; // no breadcrumb on the home page

  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [
    { label: "Home", href: "/" },
    ...parts.map((seg, i) => ({ label: pretty(seg), href: "/" + parts.slice(0, i + 1).join("/"), plain: noPage.has(seg) && i < parts.length - 1 })),
  ];
  const parent = [...crumbs.slice(0, -1)].reverse().find((c) => !("plain" in c && c.plain))?.href ?? "/";

  function goBack() {
    // Go back in history if the visitor came from this site, otherwise go up one level.
    const cameFromHere = document.referrer && new URL(document.referrer).origin === window.location.origin;
    if (cameFromHere && window.history.length > 1) router.back();
    else router.push(parent);
  }

  return (
    <div className="px-4 pt-6">
      <div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={goBack}
          className="group flex shrink-0 items-center gap-2 rounded-full border border-line bg-card px-3.5 py-2 text-sm font-semibold text-heading shadow-soft transition duration-200 hover:-translate-x-0.5 hover:border-orange/60"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition group-hover:-translate-x-0.5" aria-hidden>
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back
        </button>

        <nav aria-label="Breadcrumb" className="min-w-0 flex-1 overflow-x-auto">
          <ol className="flex w-max items-center gap-2 whitespace-nowrap text-sm">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3.5 w-3.5 text-muted/60" aria-hidden>
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                  {last || ("plain" in c && c.plain) ? (
                    <span aria-current={last ? "page" : undefined} className={last ? "font-semibold text-heading" : "text-muted"}>{c.label}</span>
                  ) : (
                    <Link href={c.href} className="text-muted transition hover:text-orange">{c.label}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}