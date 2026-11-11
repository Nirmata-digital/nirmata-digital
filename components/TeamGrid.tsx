"use client";
import { useState } from "react";
import type { TeamMember } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Avatar({ m, size }: { m: TeamMember; size: string }) {
  return m.photo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={m.photo} alt={m.name} className={`${size} rounded-full object-cover`} />
  ) : (
    <span
      className={`${size} bg-navy-gradient flex items-center justify-center rounded-full text-lg font-semibold text-white`}
      aria-hidden
    >
      {initials(m.name)}
    </span>
  );
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => {
        const open = openSlug === m.slug;
        const panelId = `team-${m.slug}`;
        return (
          <article
            key={m.slug}
            className={`rounded-3xl border bg-card p-6 transition duration-300 ${
              open ? "border-orange shadow-xl" : "border-line hover:-translate-y-1 hover:shadow-lg"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenSlug(open ? null : m.slug)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full items-center gap-4 text-left"
            >
              <Avatar m={m} size="h-16 w-16 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-semibold text-heading">{m.name}</span>
                <span className="block text-sm font-medium text-orange">{m.role}</span>
              </span>
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 shrink-0 text-muted transition ${open ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>

            <p className="mt-4 text-sm leading-relaxed text-muted">{m.short}</p>

            {open && (
              <div id={panelId} className="mt-5 space-y-4 border-t border-line pt-5">
                <p className="text-sm leading-relaxed text-heading">{m.bio}</p>

                {m.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <span key={s} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-heading">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {m.funFact && (
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-heading">Fun fact: </span>
                    {m.funFact}
                  </p>
                )}

                {(m.email || m.linkedin) && (
                  <div className="flex flex-wrap gap-4 text-sm font-semibold">
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="text-orange hover:underline">
                        Email
                      </a>
                    )}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
