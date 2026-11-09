import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Nirmata Digital about websites, SEO, social media, content and apps. Message us on WhatsApp, call, email or send the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Nirmata Digital",
    description:
      "Talk to Nirmata Digital about websites, SEO, social media, content and apps.",
    url: "/contact",
    type: "website",
  },
};

/* ───────────── CONTENT (edit the words here) ───────────── */

const intro = {
  badge: "Contact",
  titleStart: "Let's talk about",
  titleAccent: "your business.",
  text: "Tell us what you want to achieve. We will reply with honest next steps, not a hard sell.",
  trust: ["Free, no-obligation chat", "We reply within a few hours", "Proposal within 24 hours"],
};

const next = [
  { title: "We read your message", text: "Someone on the team reads it, not a bot, and checks your website and listing if you shared them." },
  { title: "We reply within a few hours", text: "On WhatsApp, call or email, whichever you prefer, with a few quick questions about your goal." },
  { title: "You get a clear proposal", text: "Within 24 hours of the call: a plan, timeline and price, plus a call to walk through it." },
];

const faqs = [
  { q: "Is the first conversation free?", a: "Yes. The first chat and the free audit cost nothing, and there is no obligation to continue." },
  { q: "Which is the fastest way to reach you?", a: "WhatsApp or a phone call. The form and email are best when you want to share more detail." },
  { q: "Can we meet online?", a: "Yes. We work with clients outside Mumbai over Google Meet and WhatsApp." },
  { q: "What should I send with my enquiry?", a: "Your website or Instagram link, what you want to achieve, and any deadline. That is enough to start." },
];

/* ───────────── SMALL HELPERS (kept in this file) ───────────── */

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    chat: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />,
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{text}</p>}
    </div>
  );
}

/* ───────────── STRUCTURED DATA ───────────── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phoneDisplay,
  email: site.email,
  sameAs: [site.instagram],
  hasMap: site.mapLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: "105/103, Om Kuleshwar Apt., Bldg. No. 10, Wawtewadi",
    addressLocality: "Virar East",
    addressRegion: "Maharashtra",
    postalCode: "401305",
    addressCountry: "IN",
  },
};

/* ───────────── PAGE ───────────── */

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const mapSrc =
    site.mapEmbed ||
    `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  const channels = [
    {
      icon: "chat",
      label: "WhatsApp",
      value: "Chat with us now",
      href: whatsappHref,
      external: true,
      primary: true,
    },
    { icon: "phone", label: "Call", value: site.phoneDisplay, href: `tel:${site.phoneLink}` },
    { icon: "phone", label: "Call", value: site.phone2Display, href: `tel:${site.phone2Link}` },
    { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: "instagram", label: "Instagram", value: "@nirmatadigital", href: site.instagram, external: true },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* 1. INTRO + FORM + CHANNELS */}
      <section className="bg-hero relative overflow-hidden">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 md:pb-28 md:pt-20">
          <p className="inline-flex rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            {intro.badge}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            {intro.titleStart} <span className="text-orange-gradient">{intro.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.text}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {intro.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-orange">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form card */}
            <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_16px_50px_rgba(10,26,63,0.12)] md:p-10">
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                Takes about a minute. Fields marked * are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Channels */}
            <div className="space-y-4">
              <div className="bg-navy-gradient relative overflow-hidden rounded-3xl border border-white/10 p-6 text-white shadow-2xl md:p-8">
                <div
                  aria-hidden
                  className="bg-orange-gradient pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                />
                <p className="relative font-mono text-xs text-white/70">FASTEST WAY TO REACH US</p>
                <p className="relative mt-3 text-2xl font-semibold">Message us on WhatsApp</p>
                <p className="relative mt-2 text-sm text-white/80">
                  Quick questions, quotes and project updates are easiest here.
                </p>
                <div className="relative mt-5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-gradient inline-block rounded-full px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-105"
                  >
                    Open WhatsApp →
                  </a>
                </div>
              </div>

              <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card">
                {channels
                  .filter((c) => !c.primary)
                  .map((c) => (
                    <li key={c.value}>
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-4 p-5 transition hover:bg-soft"
                      >
                        <span className="bg-navy-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                          <Icon name={c.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-xs text-muted">{c.label}</span>
                          <span className="block truncate text-sm font-semibold text-heading">{c.value}</span>
                        </span>
                        <span className="text-muted transition group-hover:translate-x-1 group-hover:text-heading">
                          <Icon name="arrow" className="h-4 w-4" />
                        </span>
                      </a>
                    </li>
                  ))}
                <li className="flex items-start gap-4 p-5">
                  <span className="bg-navy-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                    <Icon name="clock" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs text-muted">Hours</span>
                    <span className="block text-sm font-semibold text-heading">{site.hours}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT HAPPENS NEXT */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="What happens next" title="From your message to a clear plan" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {next.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-line bg-card p-7">
              <span className="bg-orange-gradient flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-navy">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAP + ADDRESS */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">
              Visit us
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Our office</h2>
            <p className="mt-4 flex gap-3 text-base leading-relaxed text-muted">
              <span className="mt-1 shrink-0 text-orange">
                <Icon name="pin" />
              </span>
              {site.address}
            </p>
            <p className="mt-4 text-sm text-muted">
              We work with clients across {site.areas.join(", ")} and beyond, in person or online.
            </p>
            <p className="mt-2 text-sm text-muted">Please message us before you visit, so we can make sure someone is in.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold text-heading transition hover:border-heading"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-line shadow-[0_16px_50px_rgba(10,26,63,0.12)]">
            <iframe
              title="Nirmata Digital office location on Google Maps"
              src={mapSrc}
              className="h-80 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="FAQ" title="Before you get in touch" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
          {faqs.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-heading [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line transition group-open:rotate-45">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 5. FREE AUDIT STRIP */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-4xl">
            Prefer to start with a free audit?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-navy/80">
            We review your website, ads and Google listing, then tell you what to fix first.
          </p>
          <div className="relative mt-6">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
          </div>
        </div>
      </section>
    </>
  );
}