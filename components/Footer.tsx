import Link from "next/link";
import Logo from "@/components/Logo";
import VisitorCount from "@/components/VisitorCount";
import { site } from "@/lib/site";
import { industries } from "@/content/industries";
import { services, servicePillars } from "@/content/services";
import { caseStudies } from "@/content/work";

/* Footer links come from the same content files as the header menu,
   so adding a service, industry or project updates both automatically. */
const pillarIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("growth")) return "growth";
  if (n.includes("web")) return "web";
  if (n.includes("content")) return "content";
  if (n.includes("ai") || n.includes("ml")) return "ai";
  return "automation";
};

const columns: { title: string; icon: string; links: { label: string; href: string }[] }[] = [
  ...servicePillars.map((p) => ({
    title: p,
    icon: pillarIcon(p),
    links: services.filter((s) => s.pillar === p).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  })),
  {
    title: "Work",
    icon: "content",
    links: [
      ...caseStudies.slice(0, 5).map((c) => ({ label: c.title, href: `/work/${c.slug}` })),
      { label: "View all work", href: "/work" },
    ],
  },
  { title: "Industries", icon: "building", links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })) },
  {
    title: "Company",
    icon: "people",
    links: [
      { label: "About us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Packages", href: "/packages" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    icon: "headset",
    links: [
      { label: "Free audit", href: "/free-audit" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    icon: "legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookie policy", href: "/cookies" },
    ],
  },
];

/* Fill in your real profile links. Empty ones are hidden automatically. */
const socialLinks = [
  { label: "Instagram", icon: "instagram", href: site.instagram },
  { label: "LinkedIn", icon: "linkedin", href: "" },
  { label: "Facebook", icon: "facebook", href: "" },
  { label: "X", icon: "x", href: "" },
  { label: "WhatsApp Channel", icon: "channel", href: "" },
  { label: "Telegram", icon: "telegram", href: "" },
];

/* Payment methods you accept. Remove any you do not use.
   To show a logo, save the official file in /public/payments/ and set logo: "/payments/upi.svg".
   Without a logo, the name is shown as a white badge. */
const payments: { name: string; logo?: string }[] = [
  { name: "UPI" },
  { name: "Google Pay" },
  { name: "PhonePe" },
  { name: "Paytm" },
  { name: "Visa" },
  { name: "Mastercard" },
  { name: "RuPay" },
  { name: "Net Banking" },
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
    lock: (<><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 118 0v3" /></>),
    instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" /></>),
    whatsapp: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
    channel: (<><path d="M4 10v4l12 5V5z" /><path d="M16 9.5a3 3 0 010 5M7 14.5l1 5h2l-1-4" /></>),
    linkedin: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-7M12 13c0-2 1.5-3 3-3s2 1 2 3v4" /></>),
    facebook: <path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
    x: <path d="M4 4l16 16M20 4L4 20" />,
    telegram: <path d="M21 4L3 11l6 2 2 6 3-4 5 4z M9 13l8-6" />,
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
    <footer className="bg-navy-gradient relative mt-20 text-white shadow-[0_-20px_60px_rgba(10,26,63,0.18)]">
      {/* Brand row */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-white/15 px-4 py-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div translate="no" className="notranslate">
            <Logo tone="light" boxed size="lg" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">{site.tagline}</p>
        </div>
        <Link href="/free-audit" className="bg-orange-gradient rounded-full px-7 py-3.5 text-sm font-semibold text-navy shadow-[0_10px_30px_rgba(255,122,26,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(255,122,26,0.55)]">
          Get a free audit
        </Link>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:grid-cols-3 lg:grid-cols-5">
        {columns.map((c) => (
          <div key={c.title} className="group/col">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
              <span className="text-orange"><Icon name={c.icon} /></span>
              {c.title}
            </h3>
            <span className="mt-2 block h-0.5 w-6 rounded bg-orange transition-all duration-300 group-hover/col:w-12" />
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="group flex items-center gap-2 transition duration-200 hover:translate-x-1 hover:text-white">
                    <span className="text-orange"><Icon name="chevron" className="h-3.5 w-3.5" /></span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {c.title === "Legal" && (
              <div className="mt-6 space-y-4">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white/80 transition duration-200 hover:border-orange hover:bg-orange hover:text-navy"
                >
                  <Icon name="lock" className="h-3.5 w-3.5" />
                  Admin login
                </Link>
                <div>
                  <VisitorCount />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Contact column */}
        <div className="group/col">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
            <span className="text-orange"><Icon name="phone" /></span>
            Contact
          </h3>
          <span className="mt-2 block h-0.5 w-6 rounded bg-orange transition-all duration-300 group-hover/col:w-12" />
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-semibold uppercase tracking-wide text-white/60">We accept</span>
            {payments.map((m) => (
              <span key={m.name} title={m.name} className="flex h-8 items-center rounded-md bg-white px-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                {m.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.logo} alt={m.name} className="h-5 w-auto" />
                ) : (
                  <span className="text-[11px] font-bold text-navy">{m.name}</span>
                )}
              </span>
            ))}
          </div>
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-semibold uppercase tracking-wide text-white/60">Follow us</span>
            {[...socialLinks, { label: "WhatsApp", icon: "whatsapp", href: whatsappHref }]
              .filter((s) => s.href)
              .map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition duration-200 hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-navy hover:shadow-[0_8px_20px_rgba(255,122,26,0.4)]">
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}