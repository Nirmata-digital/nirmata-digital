import Image from "next/image";
import Button from "@/components/Button";
import CaseVisual from "@/components/CaseVisual";
import ClientMarquee from "@/components/ClientMarquee";
import FaqWithHelp from "@/components/FaqWithHelp";
import HeroDashboard from "@/components/HeroDashboard";
import { caseStudies } from "@/content/work";
import { site } from "@/lib/site";
import Link from "next/link";

/* ───────────── CONTENT (edit the words here) ───────────── */

const hero = {
  badge: "Digital agency · Mumbai",
  titleStart: "Grow online.",
  titleAccent: "Measure everything.",
  text: "We create the content, ads, websites and follow-up systems that bring Mumbai businesses and overseas clients more enquiries, and we track what each one brings in.",
  trust: ["Free, no-obligation audit", "Proposal within 24 hours", "Clear monthly reports"],
};

// Put your own photo at public/images/team.jpg and set this to "/images/team.jpg"
const aboutPhoto = "";

const about = {
  eyebrow: "About Nirmata Digital",
  title: "One team for everything that brings in customers.",
  paragraphs: [
    "Nirmata Digital is a digital agency based in Virar, in the Mumbai region. We help growing businesses get found, look consistent and follow up on every enquiry, using content, ads, websites and automation that work together.",
    "Every project starts with tracking, and every month you get a plain-English report of what worked, what did not and what we will do next. We never promise rankings or sales numbers, because nobody controls them.",
  ],
  facts: [
    { k: "4", v: "Service pillars" },
    { k: "6", v: "Industries served" },
    { k: "24h", v: "Proposal after your call" },
    { k: "Free", v: "Digital audit" },
  ],
};

// Order: unique content first, then ads, then website, then follow-up and dashboards
const pillars = [
  {
    icon: "content",
    label: "01",
    title: "Content",
    tagline: "Organic, original content that is unmistakably yours.",
    services: ["Reels and short videos", "Posters and social creatives", "Product photography", "Brand kits and templates"],
    href: "/services#content",
  },
  {
    icon: "target",
    label: "02",
    title: "Growth and Ads",
    tagline: "Ads and SEO that bring the right enquiries, tracked.",
    services: ["Meta and Google Ads", "SEO and local SEO", "Google Business Profile", "Analytics and tracking"],
    href: "/services#growth",
  },
  {
    icon: "web",
    label: "03",
    title: "Web",
    tagline: "Fast, mobile-first websites that turn visits into enquiries.",
    services: ["Business websites", "Landing pages", "E-commerce", "Speed and mobile optimisation"],
    href: "/services#web",
  },
  {
    icon: "chart",
    label: "04",
    title: "Follow-up and Dashboards",
    tagline: "Reply fast, keep every lead, and see results at a glance.",
    services: ["WhatsApp follow-up flows", "CRM and lead routing", "Reporting dashboards", "Custom tools and apps"],
    href: "/services#automation",
  },
];

// Starting prices are estimates. Confirm them against your own costs.
const packages = [
  {
    name: "Starter",
    audience: "For new businesses getting online properly.",
    price: "₹19,999",
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
    price: "₹29,999",
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
    price: "₹59,999",
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

const steps = [
  { title: "Free audit", text: "We look at your website, ads and listing, and tell you what to fix first." },
  { title: "Proposal", text: "Within 24 hours you get a clear plan, timeline and price, then a call to walk through it." },
  { title: "Build and launch", text: "We build, test on real phones, and go live with tracking switched on." },
  { title: "Report and grow", text: "Every month you see results, learnings and what we do next." },
];

const faqs = [
  { q: "How much does it cost?", a: "Packages start from the prices shown above. Your final price depends on scope, and every proposal lists exactly what is included. Ad spend is paid directly to the ad platform." },
  { q: "How long does a project take?", a: "It depends on the scope. Your proposal states the schedule, and we tell you early if anything changes." },
  { q: "How many revisions are included?", a: "The number of revisions is set in your agreement and listed in the proposal, so there are no surprises." },
  { q: "How does payment work?", a: "Projects start with a 50% advance. Retainers are paid in advance each month, and you receive an invoice every time." },
  { q: "Do you work with clients outside Mumbai?", a: "Yes. We work with businesses and agencies elsewhere over Google Meet and WhatsApp." },
  { q: "What do I get from the free audit?", a: "A short review of your website, ads and Google listing, with the fixes most likely to bring in more enquiries." },
];

/* ───────────── SMALL HELPERS ───────────── */

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p: Record<string, React.ReactNode> = {
    content: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9.5v5l4.5-2.5z" /></>),
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
    web: (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>),
    chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {p[name]}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{text}</p>}
    </div>
  );
}

function GridBackdrop() {
  return <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />;
}

/* ───────────── PAGE ───────────── */

export default function HomePage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  const preview = caseStudies.slice(0, 3);

  return (
    <>
      {/* 1. HERO + ANIMATION */}
      <section className="bg-hero relative overflow-hidden">
        <GridBackdrop />
        <div aria-hidden className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30" />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-48 h-96 w-96 rounded-full bg-navy-mid opacity-10 blur-3xl dark:opacity-30" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-12 md:pb-28 md:pt-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              {hero.badge}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              {hero.titleStart} <span className="text-orange-gradient">{hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/free-audit">Get a free audit →</Button>
              <Button href="/work" variant="outline">See our work</Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-orange"><Icon name="check" className="h-4 w-4" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <HeroDashboard />
        </div>
      </section>

      {/* 2. CLIENT LOGO SLIDER */}
      <ClientMarquee />

      {/* 3. ABOUT THE COMPANY */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GridBackdrop />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">More about us</Button>
              <Button href="/contact" variant="outline">Talk to us</Button>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="bg-orange-gradient absolute -right-4 -top-4 h-full w-full rounded-3xl opacity-30 blur-2xl" />
            {aboutPhoto ? (
              <Image
                src={aboutPhoto}
                alt="The Nirmata Digital team"
                width={640}
                height={480}
                className="relative h-72 w-full rounded-3xl border border-line object-cover shadow-[0_24px_60px_rgba(10,26,63,0.25)]"
              />
            ) : null}
            <div className={`relative grid grid-cols-2 gap-4 ${aboutPhoto ? "-mt-10 px-4" : ""}`}>
              {about.facts.map((f) => (
                <div key={f.v} className="rounded-2xl border border-line bg-card p-6 shadow-[0_16px_40px_rgba(10,26,63,0.12)]">
                  <p className="text-orange-gradient font-heading text-4xl font-semibold">{f.k}</p>
                  <p className="mt-1 text-sm text-muted">{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS */}
      <section className="relative overflow-hidden bg-soft py-20 md:py-28">
        <GridBackdrop />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            center
            eyebrow="What we do"
            title="Four pillars, one connected system"
            text="Start with content that is truly yours, bring people in with ads, convert them on a fast website, then follow up and measure."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="bg-navy-gradient group relative overflow-hidden rounded-3xl border border-white/10 p-8 text-white shadow-[0_24px_60px_rgba(10,26,63,0.28)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(10,26,63,0.4)]"
              >
                <div aria-hidden className="bg-orange-gradient pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl transition group-hover:opacity-45" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-mono text-3xl font-semibold text-white/20">{p.label}</span>
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold text-white">{p.title}</h3>
                <p className="relative mt-2 text-sm text-white/70">{p.tagline}</p>
                <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
                  {p.services.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-white/90">
                      <span className="mt-0.5 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore {p.title}
                  <span className="transition group-hover:translate-x-1"><Icon name="arrow" className="h-4 w-4" /></span>
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">Explore all services</Button>
          </div>
        </div>
      </section>

      {/* 5. PACKAGES */}
      <section id="packages" className="relative scroll-mt-28 overflow-hidden py-20 md:py-28">
        <GridBackdrop />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            center
            eyebrow="Packages"
            title="Simple packages that grow with you"
            text="Start where you are. Move up when you are ready. Prices are starting points, and ad spend is paid directly to the ad platform."
          />
          <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  p.highlight
                    ? "bg-navy-gradient border border-white/10 text-white shadow-[0_30px_80px_rgba(10,26,63,0.4)] md:-translate-y-4"
                    : "border border-line bg-card shadow-[0_16px_40px_rgba(10,26,63,0.1)]"
                }`}
              >
                {p.highlight && (
                  <span className="bg-orange-gradient absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-semibold text-navy">Most popular</span>
                )}
                <h3 className={`text-xl font-semibold ${p.highlight ? "text-white" : ""}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>{p.audience}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>from</span>
                  <span className={`font-heading text-4xl font-semibold ${p.highlight ? "text-white" : "text-heading"}`}>{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-white/70" : "text-muted"}`}>{p.unit}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span>
                      <span className={p.highlight ? "text-white/90" : "text-fg"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant={p.highlight ? "primary" : "dark"} className="w-full text-center">{p.cta}</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/packages" variant="outline">Compare packages in detail</Button>
          </div>
        </div>
      </section>

      {/* 6. WORK PREVIEW */}
      <section className="relative overflow-hidden bg-soft py-20 md:py-28">
        <GridBackdrop />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Our work"
            title="Sample projects"
            text="Real case studies will replace these as we finish client work. Each one shows the problem, what we did and a result with a number."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {preview.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group overflow-hidden rounded-3xl border border-line bg-card shadow-[0_16px_40px_rgba(10,26,63,0.1)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(10,26,63,0.2)]"
              >
                <CaseVisual kind={c.kind} sample={c.isSample} />
                <div className="p-6">
                  <p className="font-mono text-xs text-muted">{c.pillar} · {c.industry}</p>
                  <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/work" variant="outline">View all work</Button>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading center eyebrow="How we work" title="A clear process from first call to monthly results" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-line bg-card p-7 shadow-[0_12px_30px_rgba(10,26,63,0.08)]">
              <span className="bg-orange-gradient flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-navy">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ + HELP BOX */}
      <FaqWithHelp faqs={faqs} title="Questions we hear most" subtitle="Everything you need to know before you get started." />

      {/* 9. FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center shadow-[0_24px_60px_rgba(255,122,26,0.3)] md:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">
            Want to know what is holding your business back online?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">
            Get a free audit and a clear list of what to fix first. No pressure and no jargon.
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