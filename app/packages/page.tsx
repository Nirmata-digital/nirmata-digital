import type { Metadata } from "next";
import { Fragment } from "react";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Simple Starter, Growth and Scale packages from Nirmata Digital, with a full comparison, add-ons and how payment works.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages | Nirmata Digital",
    description:
      "Simple Starter, Growth and Scale packages from Nirmata Digital, with a full comparison, add-ons and how payment works.",
    url: "/packages",
    type: "website",
  },
};

/* ───────────── CONTENT (edit the words here) ───────────── */

const intro = {
  badge: "Packages",
  titleStart: "Simple packages that",
  titleAccent: "grow with you.",
  text: "Start where you are and move up when you are ready. Prices are starting points. Your proposal lists exactly what is included for your business.",
};

const packages = [
  {
    name: "Starter",
    audience: "For new businesses getting online properly.",
    price: "₹XX,XXX", // replace
    unit: "one-time",
    features: [
      "Mobile-first website, up to 5 pages",
      "Google Business Profile setup",
      "Basic on-page SEO",
      "GA4 and Tag Manager tracking",
      "WhatsApp and call buttons",
      "Contact form that sends leads to you",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    audience: "For businesses ready to bring in leads every month.",
    price: "₹XX,XXX", // replace
    unit: "per month",
    features: [
      "Everything in Starter",
      "Meta and Google Ads management",
      "Monthly content plan with reels and posters",
      "Ongoing SEO improvements",
      "Conversion tracking and Meta Pixel",
      "Monthly report and strategy call",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Scale",
    audience: "For teams that want growth running on autopilot.",
    price: "₹XX,XXX", // replace
    unit: "per month",
    features: [
      "Everything in Growth",
      "WhatsApp and CRM automation",
      "Custom reporting dashboard",
      "Landing pages for each campaign",
      "Quarterly strategy review",
      "Priority support",
    ],
    cta: "Talk about Scale",
    highlight: false,
  },
];

// Order of values: [Starter, Growth, Scale]
const comparison = [
  {
    group: "Foundation",
    rows: [
      { label: "Mobile-first website, up to 5 pages", values: [true, true, true] },
      { label: "Google Business Profile setup", values: [true, true, true] },
      { label: "Basic on-page SEO", values: [true, true, true] },
      { label: "GA4 and Tag Manager tracking", values: [true, true, true] },
      { label: "WhatsApp and call buttons, contact form", values: [true, true, true] },
    ],
  },
  {
    group: "Growth",
    rows: [
      { label: "Meta and Google Ads management", values: [false, true, true] },
      { label: "Monthly content plan with reels and posters", values: [false, true, true] },
      { label: "Ongoing SEO improvements", values: [false, true, true] },
      { label: "Conversion tracking and Meta Pixel", values: [false, true, true] },
      { label: "Monthly report and strategy call", values: [false, true, true] },
    ],
  },
  {
    group: "Automation and support",
    rows: [
      { label: "WhatsApp and CRM automation", values: [false, false, true] },
      { label: "Custom reporting dashboard", values: [false, false, true] },
      { label: "Landing pages for each campaign", values: [false, false, true] },
      { label: "Quarterly strategy review", values: [false, false, true] },
      { label: "Priority support", values: [false, false, true] },
    ],
  },
];

const chooser = [
  {
    need: "I need a proper website and to be found on Google.",
    pick: "Starter",
    why: "A fast mobile-first site, your Google listing and tracking, set up once.",
  },
  {
    need: "I want enquiries coming in every month.",
    pick: "Growth",
    why: "Ads, content, SEO and a monthly report, so you can see what is working.",
  },
  {
    need: "I lose leads and time on follow-ups and reports.",
    pick: "Scale",
    why: "WhatsApp and CRM automation, plus a dashboard that shows results at a glance.",
  },
];

const addOns = [
  { name: "Extra landing pages", text: "A focused page for one offer or campaign." },
  { name: "Video shoot day", text: "A planned shoot for reels, product or brand videos." },
  { name: "WhatsApp automation flow", text: "Automatic replies and follow-ups for new enquiries." },
  { name: "Logo and brand sheet", text: "A logo, colours and fonts on one reference page." },
  { name: "Extra ad platforms", text: "Add another platform to your ad campaigns." },
];

const billing = [
  { title: "Projects", text: "Project work starts with a 50% advance. The rest of the schedule is set out in your proposal." },
  { title: "Monthly packages", text: "Monthly packages are paid in advance each month, and you receive an invoice every time." },
  { title: "Scope in writing", text: "Your agreement lists what is included, how many revisions you get, and the payment terms." },
  { title: "No surprise extras", text: "If you ask for something outside the plan, we quote it first and wait for your yes." },
];

const faqs = [
  { q: "Are the prices fixed?", a: "The prices shown are starting points. Your final price depends on scope, and your proposal lists exactly what is included." },
  { q: "Is ad spend included?", a: "No. The money you spend on ads is paid directly to the platform (for example Meta or Google) and is separate from our fee." },
  { q: "Can I change package later?", a: "Yes. Tell us when you are ready for more, and we will adjust the plan." },
  { q: "Do you guarantee results?", a: "No. Search engines, ad platforms and customers are outside our control, so we do not promise rankings or sales. We promise a clear plan, careful work and honest monthly reporting." },
  { q: "Can I buy a single service instead?", a: "Yes. Every service can be bought on its own. Packages simply bundle the most useful ones." },
  { q: "How do I get started?", a: "Send us a message or claim the free audit. We reply within a few hours and send a proposal within 24 hours of our call." },
];

/* ───────────── SMALL HELPERS (kept in this file) ───────────── */

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
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

/* ───────────── PAGE ───────────── */

export default function PackagesPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Nirmata Digital, I'd like to know which package suits my business."
  )}`;

  return (
    <>
      {/* 1. INTRO + PACKAGE CARDS */}
      <section className="bg-hero relative overflow-hidden">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-12 md:pb-32 md:pt-20">
          <p className="inline-flex rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            {intro.badge}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            {intro.titleStart} <span className="text-orange-gradient">{intro.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.text}</p>

          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  p.highlight
                    ? "bg-navy-gradient border border-white/10 text-white shadow-2xl md:-translate-y-4"
                    : "border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)]"
                }`}
              >
                {p.highlight && (
                  <span className="bg-orange-gradient absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-semibold text-navy">
                    Most popular
                  </span>
                )}

                <h2 className={`text-xl font-semibold ${p.highlight ? "text-white" : ""}`}>{p.name}</h2>
                <p className={`mt-1 text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>{p.audience}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>from</span>
                  <span
                    className={`font-heading text-4xl font-semibold ${p.highlight ? "text-white" : "text-heading"}`}
                  >
                    {p.price}
                  </span>
                  <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>{p.unit}</span>
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 text-orange">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className={p.highlight ? "text-white/90" : "text-fg"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/contact" variant={p.highlight ? "primary" : "dark"} className="w-full text-center">
                    {p.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Prices are starting points. Ad spend is paid directly to the ad platform.
          </p>
        </div>
      </section>

      {/* 2. COMPARISON TABLE */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Compare"
          title="See exactly what is in each package"
          text="Every higher package includes everything in the one before it."
        />
        <div className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-3xl border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="p-5 font-semibold text-heading">
                  Features
                </th>
                {packages.map((p) => (
                  <th
                    key={p.name}
                    scope="col"
                    className={`p-5 text-center font-semibold text-heading ${p.highlight ? "bg-soft" : ""}`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((g) => (
                <Fragment key={g.group}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="bg-soft px-5 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted"
                    >
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map((r) => (
                    <tr key={r.label} className="border-t border-line">
                      <th scope="row" className="p-5 font-normal text-fg">
                        {r.label}
                      </th>
                      {r.values.map((v, i) => (
                        <td key={i} className={`p-5 text-center ${packages[i].highlight ? "bg-soft" : ""}`}>
                          {v ? (
                            <span className="inline-flex text-orange">
                              <Icon name="check" className="h-5 w-5" />
                              <span className="sr-only">Included</span>
                            </span>
                          ) : (
                            <>
                              <span className="text-muted" aria-hidden>
                                —
                              </span>
                              <span className="sr-only">Not included</span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. WHICH PACKAGE */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Not sure?" title="Which package is right for you?" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {chooser.map((c) => (
              <div
                key={c.pick}
                className="flex flex-col rounded-3xl border border-line bg-card p-8 shadow-[0_8px_30px_rgba(10,26,63,0.06)]"
              >
                <p className="text-base font-semibold text-heading">“{c.need}”</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.why}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heading">
                  Start with {c.pick}
                  <Icon name="arrow" className="h-4 w-4" />
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Still unsure? Our free audit tells you what to fix first.{" "}
            <a href="/free-audit" className="font-semibold text-heading underline">
              Get a free audit
            </a>
          </p>
        </div>
      </section>

      {/* 4. ADD-ONS */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="Add-ons"
          title="Add only what you need"
          text="Priced per project. Ask us for a quote."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a) => (
            <div key={a.name} className="overflow-hidden rounded-2xl border border-line bg-card">
              <div className="bg-orange-gradient h-1" />
              <div className="p-6">
                <h3 className="text-base font-semibold">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW BILLING WORKS */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Payment" title="How payment works" text="Clear terms from day one, written into your agreement." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {billing.map((b, i) => (
              <div key={b.title} className="rounded-3xl border border-line bg-card p-7">
                <span className="bg-orange-gradient flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="FAQ" title="Questions about packages" />
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

      {/* 7. FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">
            Ready to pick a package?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">
            Tell us about your business and we will recommend the right starting point. No pressure and no jargon.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="dark">Talk to us →</Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-navy/30 px-7 py-3.5 text-sm font-semibold text-navy transition hover:border-navy"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}