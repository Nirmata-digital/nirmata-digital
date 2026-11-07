import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-gradient mt-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-white/80">{site.tagline}</p>
        </div>

        <div>
          <p className="font-semibold">Quick links</p>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/free-audit" className="hover:text-white">
                Free audit
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-white/70">
        <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
        {" · "}
        <Link href="/terms" className="hover:text-white">Terms</Link>
        {" · "}
        © 2026 {site.name}
      </div>
    </footer>
  );
}