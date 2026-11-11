import Link from "next/link";
import { site } from "@/lib/site";

/* Edit the link lists here. Change any href that does not match your routes. */
const columns = [
  { title: "Growth", icon: "growth", links: [
    { label: "Meta and Google Ads", href: "/services" },
    { label: "SEO and Local SEO", href: "/services" },
    { label: "Analytics and Tracking", href: "/services" },
    { label: "Monthly Reports", href: "/services" },
  ] },
  { title: "Web", icon: "web", links: [
    { label: "Business Websites", href: "/services" },
    { label: "Landing Pages", href: "/services" },
    { label: "Speed Optimisation", href: "/services" },
    { label: "Web Apps and Portals", href: "/services" },
  ] },
  { title: "Content", icon: "content", links: [
    { label: "Reels and Short Videos", href: "/services" },
    { label: "Posters and Creatives", href: "/services" },
    { label: "Photography Direction", href: "/services" },
    { label: "Brand Kits", href: "/services" },
  ] },
  { title: "Automation", icon: "automation", links: [
    { label: "WhatsApp Follow-up", href: "/services" },
    { label: "CRM and Lead Routing", href: "/services" },
    { label: "Reporting Dashboards", href: "/services" },
    { label: "Custom Tools and Apps", href: "/services" },
  ] },
  { title: "AI Solutions", icon: "ai", links: [
    { label: "Custom ML Models", href: "/contact" },
    { label: "Lead Scoring", href: "/contact" },
    { label: "Demand Forecasting", href: "/contact" },
    { label: "Recommendations", href: "/contact" },
  ] },
  { title: "Industries", icon: "building", links: site.industries.map((i: string) => ({ label: i, href: "/work" })) },
  { title: "Company", icon: "people", links: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Packages", href: "/packages" },
    { label: "Free Audit", href: "/free-audit" },
  ] },
  { title: "Support", icon: "headset", links: [
    { label: "Contact Us", href: "/contact" },
    { label: "Free Audit", href: "/free-audit" },
    { label: "FAQs", href: "/#faq" },
  ] },
  { title: "Legal", icon: "legal", links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms and Conditions", href: "/terms" },
  ] },
];

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const p: Record<string, React.ReactNode> = {
    growth: <polyline points="3 17 9 11 13 15 21 7" />,
    web: (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>),
    content: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9.5v5l4.5-2.5z" /></>),
    automation: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
    ai: (<><circle cx="6" cy="7" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="12" r="2" /><path d="M8 7l8 5M8 17l8-5" /></>),
    building: (<><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4" /></>),
    people: (<><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 010 6M18 14c2 .6 3 2.6 3 6" /></>),
    headset: (<><path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="3" y="14" width="4" height="6" rx="1" /><rect x="17" y="14" width="4" height="6" rx="1" /></>),
    legal: <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />,
    pin: (<><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
    clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
    chevron: <path d="M9 6l6 6-6 6" />,
    instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" /></>),
    whatsapp: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {p[name]}
    </svg>
  );
}

export default function Footer() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <footer className="bg-navy-gradient mt-16 text-white">
      {/* Brand row */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-white/15 px-4 py-8">
        <div>
          <p className="font-heading text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-1 max-w-md text-sm text-white/70">{site.tagline}</p>
        </div>
        <Link href="/free-audit" className="bg-orange-gradient rounded-full px-6 py-3 text-sm font-semibold text-navy">
          Get a free audit
        </Link>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:grid-cols-3 lg:grid-cols-5">
        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
              <span className="text-orange"><Icon name={c.icon} /></span>
              {c.title}
            </h3>
            <span className="mt-2 block h-0.5 w-6 rounded bg-orange" />
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-2 hover:text-white">
                    <span className="text-orange"><Icon name="chevron" className="h-3.5 w-3.5" /></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
            <span className="text-orange"><Icon name="phone" /></span>
            Contact
          </h3>
          <span className="mt-2 block h-0.5 w-6 rounded bg-orange" />
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-orange"><Icon name="pin" className="h-4 w-4" /></span>
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">{site.address}</a>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-orange"><Icon name="phone" className="h-4 w-4" /></span>
              <span>
                <a href={`tel:${site.phoneLink}`} className="hover:text-white">{site.phoneDisplay}</a>
                <br />
                <a href={`tel:${site.phone2Link}`} className="hover:text-white">{site.phone2Display}</a>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-orange"><Icon name="mail" className="h-4 w-4" /></span>
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-orange"><Icon name="clock" className="h-4 w-4" /></span>
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-xs text-white/70">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-semibold uppercase tracking-wide text-white/60">Follow us</span>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10 hover:text-white">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 hover:bg-white/10 hover:text-white">
              <Icon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}