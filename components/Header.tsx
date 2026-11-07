"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-40 px-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-black/5 bg-white/90 px-5 py-3 shadow-[0_8px_30px_rgba(10,26,63,0.15)] backdrop-blur">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-navy"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-navy">
                {l.label}
              </Link>
            ))}
            <Link
              href="/free-audit"
              className="bg-orange-gradient rounded-full px-5 py-2 text-sm font-semibold text-navy"
            >
              Free audit
            </Link>
          </nav>

          <button
            type="button"
            className="rounded-full border border-black/15 px-4 py-2 text-sm text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute left-0 right-0 top-full mt-2 rounded-3xl border border-black/5 bg-white p-5 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block text-base text-navy" onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-audit"
                  className="bg-orange-gradient block rounded-full px-4 py-3 text-center font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  Free audit
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}