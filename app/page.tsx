import Button from "@/components/Button";
import FaqWithHelp from "@/components/FaqWithHelp";
import HeroDashboard from "@/components/HeroSlider";
import ClientsCarousel from "@/components/ClientsCarousel";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";

/* ───────────── CONTENT (edit the words here) ───────────── */

const hero = {
  badge: "Digital agency · Mumbai",
  titleStart: "Grow online.",
  titleAccent: "Measure everything.",
  text: "We build the websites, ads, content, automation and custom AI that bring Mumbai businesses and overseas clients more enquiries, and we track what each one brings in.",
  trust: ["Free, no-obligation audit", "Proposal within 24 hours", "Clear monthly reports"],
};

const proof = [
  { title: "Mobile-first", text: "Built for the phone in your customer's hand." },
  { title: "Tracking from day one", text: "Every call, form and click is counted." },
  { title: "Monthly reports", text: "Results, learnings and next steps in plain English." },
  { title: "Fast replies", text: "You hear back within a few hours." },
];

const offers = [
  { icon: "audit", tag: "Free", title: "Free Digital Audit",
    text: "We review your website, ads and Google listing, then send a short list of the fixes most likely to bring in more enquiries.",
    cta: "Claim your audit", href: "/free-audit" },
  { icon: "web", tag: "Popular", title: "Conversion-Ready Website",
    text: "A fast, mobile-first website with tracking built in, designed to turn visitors into calls, forms and WhatsApp chats.",
    cta: "See website packages", href: "#packages" },
  { icon: "target", tag: "For growth", title: "Lead Engine",
    text: "Ads, SEO and WhatsApp follow-up working together, with a simple dashboard showing what each rupee brings back.",
    cta: "Talk to us", href: "/contact" },
];

const pillars = [
  { icon: "growth", label: "Pillar 01", title: "Growth",
    audience: "For businesses that want a steady flow of enquiries.",
    services: [
      "Meta and Google Ads",
      "SEO and Google Business Profile",
      "AI search visibility (ChatGPT, Gemini, Google AI)",
      "Analytics and tracking setup",
      "Conversion rate optimisation",
      "Reputation and review management",
      "Email and SMS marketing",
      "B2B lead generation for export and trade",
      "Monthly performance reports",
    ] },
  { icon: "web", label: "Pillar 02", title: "Web",
    audience: "For brands that need a site that works hard.",
    services: [
      "Business websites",
      "Landing pages for campaigns",
      "E-commerce stores and marketplace listings",
      "Speed and mobile optimisation",
      "Web apps and portals",
      "Website care plans (hosting, security, updates)",
    ] },
  { icon: "content", label: "Pillar 03", title: "Content",
    audience: "For brands that need to look consistent everywhere.",
    services: [
      "Reels, Shorts and UGC-style video ads",
      "Posters and social creatives",
      "Photography direction",
      "Logo, branding and brand kits",
    ] },
  { icon: "automation", label: "Pillar 04", title: "Automation, Apps and AI",
    audience: "For teams that lose hours to repeat work or want to use their data.",
    services: [
      "WhatsApp Business marketing and automation",
      "AI chatbots and voice agents",
      "CRM setup and lead follow-up",
      "Dashboards and custom apps",
      "Custom ML models",
      "AI training for your team",
      "Privacy and consent compliance (DPDP Act)",
    ] },
];

const mlUseCases = [
  { title: "Lead scoring", text: "Rank enquiries by how likely they are to buy, so your team calls the best ones first." },
  { title: "Demand forecasting", text: "Predict next month's enquiries or stock needs from your past numbers." },
  { title: "Churn prediction", text: "Spot customers who are about to leave while you can still win them back." },
  { title: "Recommendations", text: "Suggest the right product or service to each customer automatically." },
];

const packages = [
  { name: "Starter", audience: "For new businesses getting online properly.", price: "₹XX,XXX", unit: "one-time",
    features: ["Mobile-first website, up to 5 pages", "Google Business Profile setup", "Basic on-page SEO", "GA4 and Tag Manager tracking", "WhatsApp and call buttons", "Contact form that sends leads to you"],
    cta: "Start with Starter", highlight: false },
  { name: "Growth", audience: "For businesses ready to bring in leads every month.", price: "₹XX,XXX", unit: "per month",
    features: ["Everything in Starter", "Meta and Google Ads management", "Monthly content plan with reels and posters", "Ongoing SEO improvements", "Conversion tracking and Meta Pixel", "Monthly report and strategy call"],
    cta: "Choose Growth", highlight: true },
  { name: "Scale", audience: "For teams that want growth running on autopilot.", price: "₹XX,XXX", unit: "per month",
    features: ["Everything in Growth", "WhatsApp and CRM automation", "Custom reporting dashboard", "Landing pages for each campaign", "Quarterly strategy review", "Priority support"],
    cta: "Talk about Scale", highlight: false },
];

const addOns = [
  "Extra landing pages",
  "Video shoot day",
  "WhatsApp automation flow",
  "AI chatbot for your website",
  "Review and reputation setup",
  "Email and SMS campaigns",
  "AI search visibility audit",
  "Website care plan",
  "Logo and brand sheet",
  "Extra ad platforms",
  "Custom ML model",
];

const samples = [
  { kind: "web", tag: "Web", title: "Clinic website",
    text: "Problem: patients could not find timings or book easily. Replace with your real case study.", result: "Result with a number goes here" },
  { kind: "content", tag: "Content", title: "Boutique launch creatives",
    text: "Problem: inconsistent posts and no clear offer. Replace with your real case study.", result: "Result with a number goes here" },
  { kind: "growth", tag: "Growth", title: "Builder lead campaign",
    text: "Problem: ad spend with no tracking. Replace with your real case study.", result: "Result with a number goes here" },
];

const steps = [
  { title: "Free audit", text: "We look at your website, ads and listing, and tell you what to fix first." },
  { title: "Proposal", text: "Within 24 hours you get a clear plan, timeline and price, then a call to walk through it." },
  { title: "Build and launch", text: "We build, test on real phones, and go live with tracking switched on." },
  { title: "Report and grow", text: "Every month you see results, learnings and what we do next." },
];

// Add real quotes here, with the client's written permission.
// The section stays hidden while this list is empty.
const testimonials: { quote: string; name: string; business: string }[] = [];

const faqs = [
  { q: "How much does it cost?", a: "Packages start from the prices shown above. Your final price depends on scope, and every proposal lists exactly what is included." },
  { q: "How long does a project take?", a: "It depends on the scope. Your proposal states the schedule, and we tell you early if anything changes." },
  { q: "How many revisions are included?", a: "The number of revisions is set in your agreement and listed in the proposal, so there are no surprises." },
  { q: "How does payment work?", a: "Projects start with a 50% advance. Retainers are paid in advance each month, and you receive an invoice every time." },
  { q: "Do you work with clients outside Mumbai?", a: "Yes. We are based in Mumbai and work with businesses and agencies elsewhere over Google Meet and WhatsApp." },
  { q: "Can you set up WhatsApp automation or an AI chatbot?", a: "Yes. We can build WhatsApp Business flows and website or WhatsApp chatbots that answer common questions, collect lead details and book appointments, then pass the hot leads to your team." },
  { q: "Do you build custom machine learning models?", a: "Yes. We build models on your own data, such as lead scoring or forecasting. We start with a short feasibility check to confirm you have enough data to make it worthwhile." },
  { q: "What do I get from the free audit?", a: "A short review of your website, ads and Google listing, with the fixes most likely to bring in more enquiries." },
];

/* ───────────── SMALL HELPERS ───────────── */

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    growth: (<><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>),
    web: (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>),
    content: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9.5v5l4.5-2.5z" /></>),
    automation: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
    audit: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow text-orange">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold leading-[1.1] md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{text}</p>}
    </div>
  );
}

function SampleVisual({ kind }: { kind: string }) {
  return (
    <div className="bg-navy-gradient relative flex h-48 items-center justify-center overflow-hidden p-6">
      <div aria-hidden className="bg-orange-gradient animate-drift pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl" />
      {kind === "web" && (
        <div className="float-slow relative w-full max-w-[260px] rounded-lg bg-white/10 p-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-white/40" />)}</div>
          <div className="mt-3 h-3 w-2/3 rounded bg-white/50" />
          <div className="mt-2 h-2 w-full rounded bg-white/25" />
          <div className="mt-1.5 h-2 w-5/6 rounded bg-white/25" />
          <div className="bg-orange-gradient shadow-glow mt-4 h-6 w-24 rounded-full" />
        </div>
      )}
      {kind === "content" && (
        <div className="relative flex items-end gap-3">
          {["h-28", "h-36", "h-24"].map((h, i) => (
            <div key={h} className={`${h} w-16 rounded-lg ${i === 1 ? "bg-orange-gradient shadow-glow float-slow" : "bg-white/20"}`} />
          ))}
        </div>
      )}
      {kind === "growth" && (
        <div className="relative flex h-28 w-full max-w-[260px] items-end gap-2">
          {[30, 45, 40, 62, 55, 78, 92].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-md ${i === 6 ? "bg-orange-gradient shadow-glow" : "bg-white/25"}`} />
          ))}
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] text-white">Sample project</span>
    </div>
  );
}

const cardShadow = "shadow-layered card-lift";

/* ───────────── PAGE ───────────── */

export default function HomePage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <RevealObserver />
      {/* 1. HERO: static text on the left, auto-changing diagram on the right */}
      <section className="force-light bg-hero relative overflow-hidden">
        <div aria-hidden className="bg-orange-gradient animate-drift pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30" />
        <div aria-hidden className="animate-drift-slow pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-navy-mid opacity-10 blur-3xl dark:opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-12 md:pb-32 md:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="anim-fade shadow-layered inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-60" />
                <span className="pulse-ring relative inline-flex h-2 w-2 rounded-full bg-orange" />
              </span>
              {hero.badge}
            </p>
            <h1 style={{ animationDelay: "0.1s" }} className="anim-fade mt-6 text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              {hero.titleStart} <span className="text-flow">{hero.titleAccent}</span>
            </h1>
            <p style={{ animationDelay: "0.2s" }} className="anim-fade mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.text}</p>
            <div style={{ animationDelay: "0.3s" }} className="anim-fade mt-8 flex flex-wrap gap-3">
              <Button href="/free-audit">Get a free audit</Button>
              <Button href="/work" variant="outline">See our work</Button>
            </div>
            <ul style={{ animationDelay: "0.4s" }} className="anim-fade mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
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

      {/* 2. CLIENTS CAROUSEL */}
      <ClientsCarousel />

      {/* 3. TRUST STRIP */}
      <section className="border-y border-line bg-page">
        <div className="stagger mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p) => (
            <div key={p.title} className="reveal border-l-2 border-orange/60 pl-4">
              <p className="font-semibold text-heading">{p.title}</p>
              <p className="mt-1 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THREE OFFERS */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading eyebrow="Start here" title="Three ways to get started" text="Pick the one that fits where your business is today. Each one leads to a clear plan." />
        <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o) => (
            <div key={o.title} className={`reveal group flex flex-col rounded-3xl border border-line bg-card p-8 ${cardShadow}`}>
              <div className="flex items-center justify-between">
                <span className="icon-tile shadow-glow bg-navy-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white"><Icon name={o.icon} /></span>
                <span className="rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-xs font-medium text-orange">{o.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{o.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{o.text}</p>
              <a href={o.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-heading">
                <span className="link-grow pb-0.5">{o.cta}</span>
                <span className="text-orange transition group-hover:translate-x-1"><Icon name="arrow" className="h-4 w-4" /></span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOUR PILLARS */}
      <section className="dot-grid bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="What we do" title="Four pillars, one team" text="Everything a growing business needs online, handled together so the pieces fit." />
          <div className="stagger mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className={`reveal group overflow-hidden rounded-3xl border border-line bg-card ${cardShadow}`}>
                <div className="bg-orange-gradient shimmer relative h-1.5" />
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile shadow-glow bg-navy-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white"><Icon name={p.icon} /></span>
                    <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">{p.label}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.audience}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.services.map((s) => (
                      <li key={s} className="flex gap-3 text-sm text-fg">
                        <span className="mt-0.5 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Button href="/services" variant="outline">Explore all services</Button></div>
        </div>
      </section>

      {/* 6. CUSTOM ML */}
      <section className="bg-navy-gradient relative overflow-hidden text-white">
        <div aria-hidden className="bg-orange-gradient animate-drift pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full opacity-15 blur-3xl" />
        <div aria-hidden className="animate-drift-slow pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-400 opacity-10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-orange">Custom AI</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-4xl">Machine learning built on your own data</h2>
            <p className="mt-4 max-w-md text-white/75">Off-the-shelf tools treat every business the same. We train models on your leads, sales and customers, then connect them to the dashboards and WhatsApp flows you already use.</p>
            <div className="mt-8"><Button href="/contact">Discuss an ML project</Button></div>
          </div>
          <div className="stagger grid gap-4 sm:grid-cols-2">
            {mlUseCases.map((u) => (
              <div key={u.title} className="reveal rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange/50 hover:bg-white/10 hover:shadow-[0_22px_44px_-18px_rgba(255,122,26,0.45)]">
                <h3 className="font-semibold text-white">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PACKAGES */}
      <section id="packages" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20 md:py-28">
        <SectionHeading center eyebrow="Packages" title="Simple packages that grow with you" text="Start where you are. Move up when you are ready. Final pricing depends on scope." />
        <div className="stagger mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((p) => {
            const hl = p.highlight;
            return (
              <div key={p.name} className={`reveal relative flex flex-col rounded-3xl p-8 ${hl ? "gradient-border bg-navy-gradient shadow-glow float-slow border border-white/10 text-white md:-translate-y-4" : `border border-line bg-card ${cardShadow}`}`}>
                {hl && <span className="bg-orange-gradient shimmer absolute -top-3 left-8 rounded-full px-4 py-1 text-xs font-semibold text-navy">Most popular</span>}
                <h3 className={`text-xl font-semibold ${hl ? "text-white" : ""}`}>{p.name}</h3>
                <p className={`mt-1 text-sm ${hl ? "text-white/70" : "text-muted"}`}>{p.audience}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`text-sm ${hl ? "text-white/70" : "text-muted"}`}>from</span>
                  <span className={`font-heading text-4xl font-semibold ${hl ? "text-white" : "text-heading"}`}>{p.price}</span>
                  <span className={`text-sm ${hl ? "text-white/70" : "text-muted"}`}>{p.unit}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="mt-0.5 shrink-0 text-orange"><Icon name="check" className="h-4 w-4" /></span>
                      <span className={hl ? "text-white/90" : "text-fg"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8"><Button href="/contact" variant={hl ? "primary" : "dark"} className="w-full text-center">{p.cta}</Button></div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-heading">Popular add-ons</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {addOns.map((a) => <span key={a} className="shadow-soft rounded-full border border-line bg-card px-4 py-2 text-sm text-muted transition duration-300 hover:-translate-y-0.5 hover:border-orange/50 hover:text-heading">{a}</span>)}
          </div>
          <div className="mt-8"><Button href="/packages" variant="outline">Compare packages in detail</Button></div>
        </div>
      </section>

      {/* 8. WORK PREVIEW */}
      <section className="dot-grid bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Our work" title="Sample projects" text="Real case studies will replace these as we finish client work. Each one will show the problem, what we did and a result with a number." />
          <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
            {samples.map((s) => (
              <article key={s.title} className={`reveal overflow-hidden rounded-3xl border border-line bg-card ${cardShadow}`}>
                <SampleVisual kind={s.kind} />
                <div className="p-6">
                  <p className="text-xs font-medium text-orange">{s.tag}</p>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  <p className="mt-4 text-sm font-semibold text-heading">{s.result}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Button href="/work" variant="outline">View all work</Button></div>
        </div>
      </section>

      {/* 9. HOW WE WORK */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <SectionHeading center eyebrow="How we work" title="A clear process from first call to monthly results" />
        <div className="stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className={`reveal step-line rounded-3xl border border-line bg-card p-7 ${cardShadow}`}>
              <span className="bg-orange-gradient shadow-glow flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-navy">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TESTIMONIALS (hidden until you add real quotes) */}
      {testimonials.length > 0 && (
        <section className="dot-grid bg-soft py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading center eyebrow="Kind words" title="What clients say" />
            <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className={`reveal rounded-3xl border border-line bg-card p-8 ${cardShadow}`}>
                  <blockquote className="text-base leading-relaxed text-fg">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-heading">{t.name}</span>
                    <span className="text-muted"> · {t.business}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. FAQ + HELP BOX */}
      <FaqWithHelp faqs={faqs} title="Questions we hear most" subtitle="Everything you need to know before you get started." />

      {/* 12. FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="reveal bg-orange-gradient shimmer relative overflow-hidden rounded-3xl p-10 text-center shadow-[0_30px_80px_rgba(255,122,26,0.35)] md:p-16">
          <div aria-hidden className="animate-drift pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl" />
          <div aria-hidden className="animate-drift-slow pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">Want to know what is holding your business back online?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">Get a free audit and a clear list of what to fix first. No pressure and no jargon.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/free-audit" variant="dark">Get a free audit</Button>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-navy/30 px-7 py-3.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-navy hover:bg-white/20">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}