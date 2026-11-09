import type { Metadata } from "next";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nirmata Digital is a digital agency in Virar, Mumbai region. We help businesses grow with websites, marketing, content and apps, and report honestly.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Nirmata Digital",
    description:
      "Nirmata Digital is a digital agency in Virar, Mumbai region. We help businesses grow with websites, marketing, content and apps.",
    url: "/about",
    type: "website",
  },
};

/* ───────────── CONTENT (edit the words here) ───────────── */

const intro = {
  badge: "About us",
  titleStart: "We help businesses",
  titleAccent: "grow with technology.",
  text: "Nirmata Digital is a digital agency based in Virar, in the Mumbai region. We build websites, run search and social media, create content and build apps for businesses that want more enquiries and a clearer view of what works.",
};

const mission =
  "Our mission is to help your business grow by using technology well: tailored solutions that save time, improve how you work and bring lasting results.";

// Your own founder story. Add your name, role and a paragraph about why you started.
// While `name` is empty, the founder card is hidden.
const founder = {
  name: "",
  role: "Founder, Nirmata Digital",
  bio: "",
};

const story = [
  "We started Nirmata Digital to give growing businesses one team for the things that bring in customers: a good website, a findable Google listing, steady content and simple tools that save time.",
  "We measure what we do. Every project starts with tracking, and every month you get a plain-English report of what worked, what did not and what we will do next. We never promise rankings or sales numbers, because those depend on things nobody controls.",
  // Add your personal story here as another line: why you started, what you learned, who you want to help.
];

const pillars = [
  { title: "Growth", text: "SEO, Google Business Profile and ads that bring in the right enquiries." },
  { title: "Web", text: "Fast, mobile-first websites and apps built to turn visitors into customers." },
  { title: "Content", text: "Social media, video, design and photography that keep your brand consistent." },
  { title: "Automation and Apps", text: "WhatsApp flows, CRM and tools that save hours on repeat work." },
];

const values = [
  { title: "Honest by default", text: "We never promise results we cannot control, and we tell you early if something is not working." },
  { title: "Clear communication", text: "We reply within a few hours and write reports in plain English." },
  { title: "Reliable delivery", text: "We do not miss a deadline without telling you early." },
  { title: "Under-promise, over-deliver", text: "We would rather surprise you than disappoint you." },
  { title: "Measured, not guessed", text: "Tracking is set up first, so every decision is based on real numbers." },
  { title: "The right fit", text: "We are happy to say no when we are not the right team for your project." },
];

const steps = [
  { title: "Free audit", text: "We look at your website, ads and listing, and tell you what to fix first." },
  { title: "Proposal", text: "Within 24 hours you get a clear plan, timeline and price, then a call to walk through it." },
  { title: "Build and launch", text: "We build, test on real phones, and go live with tracking switched on." },
  { title: "Report and grow", text: "Every month you see results, learnings and what we do next." },
];

/* ───────────── SMALL HELPERS (kept in this file) ───────────── */

function SectionHeading({
  eyebrow,
  title,
  text,
  center = true,
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
  "@type": "Organization",
  name: site.name,
  email: site.email,
  telephone: site.phoneDisplay,
  sameAs: [site.instagram],
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

export default function AboutPage() {
  const initials = founder.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

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
            {intro.titleStart} <span className="text-orange-gradient">{intro.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Talk to us →</Button>
            <Button href="/services" variant="outline">See our services</Button>
          </div>
        </div>
      </section>

      {/* 2. STORY (+ founder card when you add a name) */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div
          className={`grid items-start gap-12 ${
            founder.name ? "lg:grid-cols-[0.7fr_1.3fr]" : "lg:grid-cols-1"
          }`}
        >
          {founder.name && (
            <div className="rounded-3xl border border-line bg-card p-8 text-center shadow-[0_8px_30px_rgba(10,26,63,0.06)]">
              <div className="bg-navy-gradient mx-auto flex h-28 w-28 items-center justify-center rounded-full text-3xl font-semibold text-white">
                {initials}
              </div>
              <p className="mt-5 text-xl font-semibold text-heading">{founder.name}</p>
              <p className="mt-1 text-sm text-muted">{founder.role}</p>
              {founder.bio && <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>}
            </div>
          )}

          <div className={founder.name ? "" : "mx-auto max-w-3xl"}>
            <SectionHeading eyebrow="Our story" title="Why we do this" center={false} />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="bg-navy-gradient relative overflow-hidden rounded-3xl border border-white/10 p-10 text-white shadow-2xl md:p-16">
          <div
            aria-hidden
            className="bg-orange-gradient pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
          />
          <p className="relative font-mono text-xs text-white/70">OUR MISSION</p>
          <p className="relative mt-4 max-w-3xl text-2xl font-semibold leading-snug md:text-4xl">{mission}</p>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Four pillars, one team"
          text="Everything a growing business needs online, handled together so the pieces fit."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)]"
            >
              <div className="bg-orange-gradient h-1.5" />
              <div className="p-6">
                <p className="font-mono text-xs text-muted">Pillar 0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">Explore all services</Button>
        </div>
      </section>

      {/* 5. VALUES */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Values" title="How we work with you" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-line bg-card p-8 shadow-[0_8px_30px_rgba(10,26,63,0.06)]"
              >
                <span className="bg-orange-gradient block h-1 w-10 rounded-full" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="How we work" title="A clear process from first call to monthly results" />
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

      {/* 7. INDUSTRIES + OFFICE */}
      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">
              Who we work with
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Businesses across many industries
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {site.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-heading"
                >
                  {ind}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              We work with clients across {site.areas.join(", ")} and beyond, in person or online.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-card p-8 shadow-[0_8px_30px_rgba(10,26,63,0.06)]">
            <p className="font-mono text-xs text-muted">OUR OFFICE</p>
            <p className="mt-3 text-lg font-semibold leading-snug text-heading">{site.address}</p>
            <p className="mt-3 text-sm text-muted">
              Please message us before you visit, so we can make sure someone is in.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-line px-6 py-3 text-sm font-semibold text-heading transition hover:border-heading"
              >
                Open in Google Maps
              </a>
              <Button href="/contact">Contact us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">
            Let&apos;s see how we can help your business.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">
            Start with a free audit. We will tell you what to fix first, with no pressure and no jargon.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
            <Button href="/contact" variant="outline">Talk to us</Button>
          </div>
        </div>
      </section>
    </>
  );
}