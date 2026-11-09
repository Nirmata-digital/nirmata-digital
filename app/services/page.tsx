import type { Metadata } from "next";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, SEO, Google Business Profile, social media, video, photography and apps from Nirmata Digital. See what we do and who each service is for.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Nirmata Digital",
    description:
      "Websites, SEO, Google Business Profile, social media, video, photography and apps from Nirmata Digital.",
    url: "/services",
    type: "website",
  },
};

/* ───────────── CONTENT (edit the words here) ───────────── */

const intro = {
  badge: "Services",
  title: "Everything your business needs to grow online.",
  text: "Four pillars that work together: get found, turn visitors into enquiries, look consistent everywhere, and save time on repeat work. Use one service on its own, or combine them.",
};

const pillars = [
  {
    id: "growth",
    icon: "growth",
    label: "Pillar 01",
    title: "Growth",
    tagline: "Get found by people who are ready to buy.",
    audience: "For businesses that want a steady flow of enquiries.",
    problem:
      "Good businesses stay invisible when nobody can find them, and money is wasted when nobody knows which channel brings customers.",
    services: [
      {
        name: "Search Engine Optimisation (SEO)",
        text: "Help your website show up higher in search results for the things your customers look for.",
      },
      {
        name: "Google Business Profile optimisation",
        text: "Set up and improve your listing so you are easier to find on Google Search and Maps.",
      },
      {
        name: "Social media ad campaigns",
        text: "Run ads on social platforms to reach more of the right people and bring in enquiries.",
      },
      {
        name: "Tracking and analytics setup",
        text: "Count calls, forms and clicks, so you know what is working and what is not.",
      },
    ],
    deliverables: [
      "A written plan before we start",
      "Tracking switched on from day one",
      "Monthly report with results, learnings and next steps",
    ],
  },
  {
    id: "web",
    icon: "web",
    label: "Pillar 02",
    title: "Web",
    tagline: "A website that works as hard as you do.",
    audience: "For brands that need a site customers can use easily on a phone.",
    problem:
      "A slow or confusing website loses visitors quietly. Most of your customers will see it on a phone first.",
    services: [
      {
        name: "Website design and development",
        text: "User-friendly websites that look great and work smoothly on every screen size.",
      },
      {
        name: "Landing pages for campaigns",
        text: "Focused pages built around one offer, so ad clicks turn into calls, forms and WhatsApp chats.",
      },
      {
        name: "E-commerce development",
        text: "Online stores that make it easy for customers to browse, choose and pay.",
      },
      {
        name: "Speed and mobile optimisation",
        text: "Faster loading and cleaner layouts for the phone in your customer's hand.",
      },
    ],
    deliverables: [
      "Designed and tested for phones first",
      "Contact form, WhatsApp and call buttons connected",
      "Basic on-page SEO and tracking included",
    ],
  },
  {
    id: "content",
    icon: "content",
    label: "Pillar 03",
    title: "Content",
    tagline: "Look consistent everywhere your customers see you.",
    audience: "For brands that need steady, good-looking content without the stress.",
    problem:
      "Inconsistent posts and weak visuals make a good business look smaller than it is.",
    services: [
      {
        name: "Social media handling",
        text: "Manage your accounts so your brand stays active and engaging.",
      },
      {
        name: "Video editing and UGC video",
        text: "Turn your footage and ideas into reels and videos that people want to watch.",
      },
      {
        name: "Graphic design",
        text: "Posters, social creatives and brand visuals that all feel like one brand.",
      },
      {
        name: "Product photography",
        text: "Quality photos that show your products and business in their best light.",
      },
      {
        name: "Content writing",
        text: "Clear, interesting writing for your website, posts and blogs.",
      },
    ],
    deliverables: [
      "A simple content plan before we create",
      "Brand-consistent files, named and organised",
      "Formats ready for your website and social platforms",
    ],
  },
  {
    id: "automation",
    icon: "automation",
    label: "Pillar 04",
    title: "Automation and Apps",
    tagline: "Stop losing hours to repeat work.",
    audience: "For teams that chase leads and build reports by hand.",
    problem:
      "Leads go cold when follow-up depends on someone remembering, and hours disappear into reports.",
    services: [
      {
        name: "Application development",
        text: "Easy-to-use apps and tools built around how your business actually works.",
      },
      {
        name: "WhatsApp follow-up flows",
        text: "Reply to new enquiries quickly and keep leads warm without manual effort.",
      },
      {
        name: "CRM setup and lead routing",
        text: "Keep every enquiry in one place and make sure the right person sees it.",
      },
      {
        name: "Reporting dashboards",
        text: "One simple screen that shows leads, spend and results.",
      },
    ],
    deliverables: [
      "A map of your current process before we build",
      "Everything tested before it goes live",
      "A short guide so your team can use it",
    ],
  },
];

const guide = [
  { need: "People cannot find us on Google", start: "Growth", href: "#growth", why: "SEO and your Google Business Profile" },
  { need: "Our website does not bring enquiries", start: "Web", href: "#web", why: "A faster, clearer, mobile-first site" },
  { need: "Our posts and visuals look inconsistent", start: "Content", href: "#content", why: "One brand across posts, videos and photos" },
  { need: "We lose time on follow-ups and reports", start: "Automation and Apps", href: "#automation", why: "WhatsApp flows, CRM and dashboards" },
  { need: "I am not sure where to start", start: "Free audit", href: "/free-audit", why: "We review your site, ads and listing for you" },
];

const steps = [
  { title: "Free audit", text: "We look at your website, ads and listing, and tell you what to fix first." },
  { title: "Proposal", text: "Within 24 hours you get a clear plan, timeline and price, then a call to walk through it." },
  { title: "Build and launch", text: "We build, test on real phones, and go live with tracking switched on." },
  { title: "Report and grow", text: "Every month you see results, learnings and what we do next." },
];

const faqs = [
  {
    q: "Can I buy just one service?",
    a: "Yes. Every service can be bought on its own. The packages simply bundle the most useful ones at a better value.",
  },
  {
    q: "Do you guarantee rankings or sales?",
    a: "No. Nobody can honestly promise a ranking or a sales number, because search engines, ad platforms and customers are outside our control. We promise a clear plan, careful work and honest reporting.",
  },
  {
    q: "Do you work with my kind of business?",
    a: "We work with restaurants, healthcare, real estate, education, manufacturing and entertainment businesses, among others. If your industry is not listed, ask us. We will tell you honestly if we are the right fit.",
  },
  {
    q: "How will I know what you are doing?",
    a: "You get a monthly report in plain English, and we are on WhatsApp and Google Meet when you need us.",
  },
  {
    q: "Who owns the work?",
    a: "Ownership, revisions and payment terms are written into your agreement before work starts, so there are no surprises.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope. Our packages show starting prices, and every proposal lists exactly what is included.",
  },
];

/* ───────────── SMALL HELPERS (kept in this file) ───────────── */

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    growth: (
      <>
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="15 7 21 7 21 13" />
      </>
    ),
    web: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    content: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9.5v5l4.5-2.5z" />
      </>
    ),
    automation: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
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
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
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
  "@type": "ItemList",
  name: `${site.name} services`,
  itemListElement: pillars
    .flatMap((p) => p.services)
    .map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.text,
        provider: { "@type": "Organization", name: site.name },
      },
    })),
};

/* ───────────── PAGE ───────────── */

export default function ServicesPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* 1. INTRO */}
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
            Everything your business needs to{" "}
            <span className="text-orange-gradient">grow online.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/free-audit">Get a free audit →</Button>
            <Button href="/packages" variant="outline">See packages</Button>
          </div>

          <nav aria-label="Jump to a service" className="mt-12 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex items-center gap-3 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-heading shadow-[0_8px_30px_rgba(10,26,63,0.06)] transition hover:-translate-y-0.5 hover:border-heading"
              >
                <span className="bg-navy-gradient flex h-8 w-8 items-center justify-center rounded-full text-white">
                  <Icon name={p.icon} className="h-4 w-4" />
                </span>
                {p.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 2. PILLAR BLOCKS */}
      {pillars.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-24 py-20 md:py-28 ${i % 2 === 0 ? "bg-page" : "bg-soft"}`}
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* Summary panel */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="bg-navy-gradient relative overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-2xl">
                <div
                  aria-hidden
                  className="bg-orange-gradient pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <Icon name={p.icon} />
                    </span>
                    <span className="font-mono text-xs text-white/70">{p.label}</span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">{p.title}</h2>
                  <p className="mt-3 text-lg text-white/90">{p.tagline}</p>
                  <p className="mt-5 border-t border-white/15 pt-5 text-sm text-white/70">{p.audience}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/free-audit">Start with a free audit</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                <span className="font-semibold text-heading">The problem: </span>
                {p.problem}
              </p>

              <h3 className="mt-10 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                What we do
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {p.services.map((s) => (
                  <div
                    key={s.name}
                    className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)]"
                  >
                    <div className="bg-orange-gradient h-1" />
                    <div className="p-6">
                      <h4 className="text-base font-semibold">{s.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                What you get
              </h3>
              <ul className="mt-4 space-y-3">
                {p.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-fg">
                    <span className="mt-0.5 shrink-0 text-orange">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-heading"
              >
                Talk to us about {p.title}
                <span className="transition group-hover:translate-x-1">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* 3. WHERE SHOULD I START */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading
          center
          eyebrow="Not sure?"
          title="Where should you start?"
          text="Match the problem you have today to the pillar that fixes it first."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guide.map((g) => (
            <a
              key={g.need}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-line bg-card p-6 shadow-[0_8px_30px_rgba(10,26,63,0.06)] transition hover:-translate-y-1 hover:border-heading"
            >
              <p className="text-base font-semibold text-heading">“{g.need}”</p>
              <p className="mt-3 flex-1 text-sm text-muted">{g.why}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-heading">
                Start with {g.start}
                <span className="transition group-hover:translate-x-1">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">
            Industries
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Built around the way your industry works</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {site.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-heading"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading center eyebrow="How we work" title="A clear process from first call to monthly results" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
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

      {/* 6. FAQ */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading center eyebrow="FAQ" title="Questions about our services" />
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
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">
            Not sure which service you need?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">
            Get a free audit and we will tell you what to fix first. No pressure and no jargon.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
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