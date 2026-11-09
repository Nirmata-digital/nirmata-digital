"use client";

import Link from "next/link";
import { useState } from "react";
import CaseVisual from "@/components/CaseVisual";
import { caseStudies, pillarFilters } from "@/content/work";

export default function WorkGrid() {
  const [active, setActive] = useState<(typeof pillarFilters)[number]>("All");
  const shown = caseStudies.filter((c) => active === "All" || c.pillar === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by service">
        {pillarFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              active === f
                ? "bg-orange-gradient border-transparent text-navy"
                : "border-line bg-card text-heading hover:border-heading"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <Link
            key={c.slug}
            href={`/work/${c.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,26,63,0.14)]"
          >
            <CaseVisual kind={c.kind} sample={c.isSample} />
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-xs text-muted">
                {c.pillar} · {c.industry}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>
              <p className="mt-5 text-sm font-semibold text-heading">
                View case study{" "}
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}