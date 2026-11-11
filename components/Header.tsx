"use client";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchDialog from "@/components/SearchDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { menu } from "@/lib/nav";
import { site } from "@/lib/site";

const BAR_HEIGHT = 48;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [barOpen, setBarOpen] = useState(true);

  // Announcement bar state + scroll position
  useEffect(() => {
    try {
      if (sessionStorage.getItem("announcement-closed") === "1") setBarOpen(false);
    } catch {}
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the page changes
  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Close the dropdown when clicking outside, or pressing Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setActive(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function closeBar() {
    setBarOpen(false);
    try {
      sessionStorage.setItem("announcement-closed", "1");
    } catch {}
  }

  const isActive = (href?: string) =>
    !!href && (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  const scrolled = scrollY > 24;
  const top = barOpen ? Math.max(0, BAR_HEIGHT - scrollY) : 0;
  const activeItem = menu.find((m) => m.label === active && m.columns);

  const navText = "text-[15px] font-medium tracking-[-0.01em]";

  return (
    <>
      {/* Announcement bar: same width and edge padding as the header below it */}
      {barOpen && (
        <div className="bg-navy-gradient relative z-30 h-12 border-b border-white/10 px-4 text-white">
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-2">
            <p className="min-w-0 flex-1 truncate text-xs sm:text-sm">
              <span className="font-semibold">{site.announcement.label}</span>
              <span className="hidden text-white/80 sm:inline"> · {site.announcement.text}</span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={site.announcement.href}
                className="bg-orange-gradient whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold text-navy transition hover:brightness-105"
              >
                {site.announcement.cta} →
              </Link>
              <button
                type="button"
                onClick={closeBar}
                aria-label="Close announcement"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="fixed inset-x-0 z-40 px-4" style={{ top }}>
        <div
          ref={wrapRef}
          onMouseLeave={() => setActive(null)}
          className={`relative mx-auto transition-all duration-300 ${scrolled ? "mt-3 max-w-5xl" : "mt-0 max-w-6xl"}`}
        >
          <div
            className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-line bg-header px-5 py-2.5 shadow-[0_8px_30px_rgba(10,26,63,0.18)] backdrop-blur"
                : "border-transparent bg-transparent px-2 py-4"
            }`}
          >
           <Logo mark showName size="sm" />

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {menu.map((item) =>
                item.columns ? (
                  <button
                    key={item.label}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={active === item.label}
                    onMouseEnter={() => setActive(item.label)}
                    onClick={() => setActive((a) => (a === item.label ? null : item.label))}
                    className={`${navText} flex items-center gap-1.5 rounded-full px-3.5 py-2 transition hover:text-heading ${
                      active === item.label || isActive(item.href) ? "text-heading" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <Chevron open={active === item.label} />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onMouseEnter={() => setActive(null)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`${navText} rounded-full px-3.5 py-2 transition hover:text-heading ${
                      isActive(item.href) ? "text-heading" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search the site (Ctrl K)"
                className="flex items-center gap-2 rounded-full border border-line bg-card px-3 py-2 text-sm text-muted transition hover:border-heading hover:text-heading"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <kbd className="hidden rounded border border-line px-1.5 font-mono text-[11px] xl:inline">Ctrl K</kbd>
              </button>

              <ThemeToggle />

              <Link
                href="/free-audit"
                className="bg-orange-gradient hidden rounded-full px-5 py-2.5 text-sm font-semibold text-navy transition hover:brightness-105 lg:inline-block"
              >
                Free audit
              </Link>

              <button
                type="button"
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-heading lg:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {/* Desktop dropdown panel */}
          {activeItem && (
            <div className="absolute left-0 right-0 top-full hidden pt-2 lg:block">
              <div className="rounded-3xl border border-line bg-card p-8 shadow-2xl">
                <div
                  className="grid gap-8"
                  style={{ gridTemplateColumns: `repeat(${activeItem.columns!.length}, minmax(0, 1fr))` }}
                >
                  {activeItem.columns!.map((col) => (
                    <div key={col.title}>
                      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                        {col.title}
                      </p>
                      <ul className="mt-4 space-y-1">
                        {col.items.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="block rounded-xl px-3 py-2.5 transition hover:bg-soft"
                            >
                              <span className="block text-[15px] font-semibold text-heading">{l.label}</span>
                              {l.text && <span className="mt-0.5 block text-sm leading-snug text-muted">{l.text}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {activeItem.footer && (
                  <div className="mt-6 border-t border-line pt-5">
                    <Link href={activeItem.footer.href} className="text-sm font-semibold text-orange hover:underline">
                      {activeItem.footer.label} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {mobileOpen && (
            <nav
              id="mobile-menu"
              aria-label="Mobile"
              className="absolute left-0 right-0 top-full mt-2 max-h-[75vh] overflow-y-auto rounded-3xl border border-line bg-card p-4 shadow-xl lg:hidden"
            >
              <ul className="flex flex-col">
                {menu.map((item) => (
                  <li key={item.label} className="border-b border-line last:border-0">
                    {item.columns ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={mobileSection === item.label}
                          onClick={() => setMobileSection((s) => (s === item.label ? null : item.label))}
                          className="flex w-full items-center justify-between px-2 py-4 text-left text-base font-medium text-heading"
                        >
                          {item.label}
                          <Chevron open={mobileSection === item.label} />
                        </button>
                        {mobileSection === item.label && (
                          <div className="pb-3 pl-2">
                            {item.columns.map((col) => (
                              <div key={col.title} className="mb-3">
                                <p className="px-2 pb-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                                  {col.title}
                                </p>
                                {col.items.map((l) => (
                                  <Link key={l.href} href={l.href} className="block px-2 py-2 text-sm text-heading">
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            {item.footer && (
                              <Link href={item.footer.href} className="block px-2 py-2 text-sm font-semibold text-orange">
                                {item.footer.label} →
                              </Link>
                            )}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={item.href!} className="block px-2 py-4 text-base font-medium text-heading">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-audit"
                className="bg-orange-gradient mt-4 block rounded-full px-4 py-3 text-center font-semibold text-navy"
              >
                Free audit
              </Link>
            </nav>
          )}
        </div>
      </header>

      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
    </>
  );
}