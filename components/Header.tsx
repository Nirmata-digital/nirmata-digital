"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4">
      <div
        className={`relative mx-auto transition-all duration-300 ${
          scrolled ? "mt-3 max-w-5xl" : "mt-0 max-w-6xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-line bg-header px-6 py-3 shadow-[0_8px_30px_rgba(10,26,63,0.18)] backdrop-blur"
              : "border-transparent bg-transparent px-2 py-5"
          }`}
        >
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-heading"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-2">
            <nav className="mr-4 hidden items-center gap-7 md:flex" aria-label="Main">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-heading">
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

            <ThemeToggle />

            <button
              type="button"
              className="rounded-full border border-line px-4 py-2 text-sm text-heading md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute left-0 right-0 top-full mt-2 rounded-3xl border border-line bg-card p-5 shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block text-base text-heading" onClick={() => setOpen(false)}>
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