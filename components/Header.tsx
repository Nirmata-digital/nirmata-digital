"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

const BAR_HEIGHT = 48;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [barOpen, setBarOpen] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("announcement-closed") === "1") setBarOpen(false);
    } catch {}
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeBar() {
    setBarOpen(false);
    try {
      sessionStorage.setItem("announcement-closed", "1");
    } catch {}
  }

  const scrolled = scrollY > 24;
  const top = barOpen ? Math.max(0, BAR_HEIGHT - scrollY) : 0;

  return (
    <>
      {barOpen && (
        <div className="bg-navy-gradient relative z-30 h-12 border-b border-white/10 text-white">
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-3 px-12 sm:gap-5">
            <p className="min-w-0 truncate text-xs sm:text-sm">
              <span className="font-semibold">{site.announcement.label}</span>
              <span className="hidden text-white/80 sm:inline">
                {" "}
                · {site.announcement.text}
              </span>
            </p>
            <Link
              href={site.announcement.href}
              className="bg-orange-gradient shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold text-navy transition hover:brightness-105"
            >
              {site.announcement.cta} →
            </Link>
          </div>

          <button
            type="button"
            onClick={closeBar}
            aria-label="Close announcement"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>
      )}

      <header className="fixed inset-x-0 z-40 px-4" style={{ top }}>
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
    </>
  );
}