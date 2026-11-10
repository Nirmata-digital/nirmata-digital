"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const SLIDE_MS = 6500;

const slides = [
  { id: "overview", tab: "Overview", kicker: "Digital agency · Mumbai", title: "Grow online. Measure everything.",
    text: "Websites, ads, content, automation and custom AI, run by one team, with every enquiry tracked back to its source.",
    chips: ["Free audit", "Proposal in 24 hours", "Monthly reports"], cta: { label: "Get a free audit", href: "/free-audit" },
    status: "Every lead tracked" },
  { id: "content", tab: "Content", kicker: "Content", title: "Look consistent everywhere",
    text: "Reels, posters and social creatives planned a month at a time, so your brand shows up sharp on every feed.",
    chips: ["Reels and shorts", "Posters", "Brand kits"], cta: { label: "See content work", href: "/work" },
    status: "Monthly content plan ready" },
  { id: "ads", tab: "Ads", kicker: "Growth", title: "Ads that report what they earn",
    text: "Meta and Google campaigns with conversion tracking, so you see cost per enquiry instead of guessing.",
    chips: ["Meta Ads", "Google Ads", "Local SEO"], cta: { label: "Plan my campaigns", href: "/contact" },
    status: "Conversion tracking active" },
  { id: "web", tab: "Website", kicker: "Web", title: "Websites built to get enquiries",
    text: "Fast, mobile-first sites with call, form and WhatsApp buttons wired to tracking from the first day.",
    chips: ["Mobile-first", "Tracking built in", "Landing pages"], cta: { label: "See website packages", href: "#packages" },
    status: "Tested on real phones" },
  { id: "apps", tab: "Dashboard", kicker: "Apps and dashboards", title: "One dashboard for every channel",
    text: "Custom dashboards, portals and internal tools that put calls, forms and ad results on a single screen.",
    chips: ["Reporting dashboards", "Web apps", "Client portals"], cta: { label: "Talk about an app", href: "/contact" },
    status: "Live from your data" },
  { id: "automation", tab: "Automation", kicker: "Automation", title: "Follow up while you sleep",
    text: "WhatsApp replies, CRM setup and lead routing that answer every enquiry within minutes, not days.",
    chips: ["WhatsApp flows", "CRM setup", "Lead routing"], cta: { label: "Automate my follow-up", href: "/contact" },
    status: "Zero missed leads" },
  { id: "ml", tab: "AI and ML", kicker: "Custom AI", title: "Custom machine learning models",
    text: "We build models trained on your own data: lead scoring, demand forecasting, churn prediction and recommendations.",
    chips: ["Lead scoring", "Forecasting", "Recommendations"], cta: { label: "Discuss an ML project", href: "/contact" },
    status: "Trained on your data" },
];

/* ── right-hand animated visuals ── */

const d = (i: number, step = 0.12) => ({ animationDelay: `${i * step}s` });

function Bars({ vals, h = "h-28" }: { vals: number[]; h?: string }) {
  return (
    <div className={`flex ${h} items-end gap-2`}>
      {vals.map((v, i) => (
        <div key={i} style={{ height: `${v}%`, ...d(i) }}
          className={`anim-grow-y flex-1 rounded-t-md ${i === vals.length - 1 ? "bg-orange-gradient" : "bg-white/20"}`} />
      ))}
    </div>
  );
}

function Visual({ id }: { id: string }) {
  if (id === "overview")
    return (
      <>
        <div className="grid grid-cols-3 gap-2">
          {["Content", "Ads", "Website", "Dashboard", "Automation", "AI / ML"].map((t, i) => (
            <div key={t} style={d(i, 0.15)} className="anim-fade rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-semibold">
              <span className="anim-node mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-orange" style={d(i, 0.3)} />
              {t}
            </div>
          ))}
        </div>
        <div className="mt-6"><Bars vals={[35, 48, 42, 60, 55, 72, 90]} /></div>
      </>
    );

  if (id === "content")
    return (
      <div className="flex h-44 items-center justify-center gap-4">
        <div className="anim-float h-40 w-12 rounded-lg bg-white/15" style={d(1)} />
        <div className="relative h-44 w-24 overflow-hidden rounded-2xl border border-white/20 bg-white/10 anim-fade">
          <div className="bg-orange-gradient absolute inset-x-3 top-3 h-20 rounded-lg" />
          <div className="absolute left-1/2 top-9 h-0 w-0 -translate-x-1/2 border-y-[9px] border-l-[14px] border-y-transparent border-l-navy" />
          <div className="absolute inset-x-3 bottom-8 h-2 rounded bg-white/50" />
          <div className="absolute inset-x-3 bottom-4 h-2 w-2/3 rounded bg-white/25" />
        </div>
        <div className="anim-float h-32 w-16 rounded-lg bg-white/25" style={d(3)} />
      </div>
    );

  if (id === "ads")
    return (
      <div className="space-y-4">
        {[["Impressions", 100], ["Clicks", 44], ["Calls and forms", 16], ["WhatsApp chats", 10]].map(([l, w], i) => (
          <div key={l as string}>
            <div className="flex justify-between text-xs text-white/70"><span>{l}</span></div>
            <div className="mt-1.5 h-3 rounded-full bg-white/10">
              <div style={{ width: `${w}%`, ...d(i, 0.25) }} className={`anim-grow-x h-3 origin-left rounded-full ${i === 2 ? "bg-orange-gradient" : "bg-white/40"}`} />
            </div>
          </div>
        ))}
        <div className="flex gap-2 pt-1 text-xs"><span className="rounded-full bg-white/10 px-3 py-1">Meta</span><span className="rounded-full bg-white/10 px-3 py-1">Google</span></div>
      </div>
    );

  if (id === "web")
    return (
      <div className="rounded-xl bg-white/10 p-3">
        <div className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-white/40" />)}</div>
        <div className="anim-fade mt-4 h-4 w-2/3 rounded bg-white/50" style={d(1, 0.3)} />
        <div className="anim-fade mt-3 h-2.5 w-full rounded bg-white/25" style={d(2, 0.3)} />
        <div className="anim-fade mt-2 h-2.5 w-5/6 rounded bg-white/25" style={d(3, 0.3)} />
        <div className="mt-5 flex gap-2">
          <div className="bg-orange-gradient anim-pulse-btn h-8 w-28 rounded-full" />
          <div className="h-8 w-8 rounded-full bg-success/80" />
          <div className="h-8 w-8 rounded-full bg-white/25" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">{[4, 5, 6].map((i) => <div key={i} style={d(i, 0.3)} className="anim-fade h-14 rounded-lg bg-white/15" />)}</div>
      </div>
    );

  if (id === "apps")
    return (
      <>
        <div className="grid grid-cols-3 gap-2 text-xs">
          {["Calls", "Forms", "WhatsApp"].map((t, i) => (
            <div key={t} style={d(i, 0.2)} className="anim-fade rounded-lg bg-white/10 p-3"><p className="text-white/70">{t}</p><div className="mt-2 h-2 w-1/2 rounded bg-white/40" /></div>
          ))}
        </div>
        <svg viewBox="0 0 300 100" className="mt-5 h-28 w-full" aria-hidden>
          <path d="M0 85 L40 70 L80 76 L120 50 L160 56 L200 30 L240 36 L300 8" fill="none" stroke="#ff8a1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="anim-draw" />
          <path d="M0 92 L60 84 L120 80 L180 70 L240 64 L300 52" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round" className="anim-draw" style={{ animationDelay: ".4s" }} />
        </svg>
      </>
    );

  if (id === "automation")
    return (
      <div className="space-y-3">
        {["New enquiry arrives", "WhatsApp reply sent", "Lead saved in CRM", "Owner gets the report"].map((t, i) => (
          <div key={t} style={d(i, 0.45)} className="anim-fade flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold">
            <span className="bg-orange-gradient flex h-6 w-6 items-center justify-center rounded-full text-xs text-navy">{i + 1}</span>
            {t}
            <span className="anim-node ml-auto h-2 w-2 rounded-full bg-success" style={d(i, 0.45)} />
          </div>
        ))}
      </div>
    );

  /* ml: small neural network */
  const layers = [3, 5, 5, 2];
  const pts = layers.map((n, l) => Array.from({ length: n }, (_, i) => ({ x: 30 + l * 80, y: (i + 0.5) * (180 / n) })));
  return (
    <>
      <svg viewBox="0 0 270 180" className="h-40 w-full" aria-hidden>
        {pts.slice(0, -1).flatMap((layer, l) => layer.flatMap((a, i) => pts[l + 1].map((b, j) => (
          <line key={`${l}-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,.15)" />
        ))))}
        {pts.flat().map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="6" fill={i % 4 === 0 ? "#ff8a1f" : "#fff"} className="anim-node" style={{ animationDelay: `${(i % 7) * 0.2}s` }} />
        ))}
      </svg>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {["Lead scoring", "Sales forecast", "Churn prediction", "Recommendations"].map((t) => <span key={t} className="rounded-full bg-white/10 px-3 py-1">{t}</span>)}
      </div>
    </>
  );
}

/* ── slider ── */

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduced]);

  const s = slides[active];

  return (
    <section
      className="bg-navy-gradient relative overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="What we do"
    >
      <div aria-hidden className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[34rem] max-w-6xl items-center gap-12 px-4 pb-28 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div key={s.id} className="anim-fade" aria-live="polite">
          <p className="text-sm font-semibold text-orange">{s.kicker}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{s.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{s.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={s.cta.href}>{s.cta.label}</Button>
            <Button href="/work" variant="outline">See our work</Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            {s.chips.map((c) => (
              <li key={c} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange" />{c}</li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div key={s.id} className="anim-fade rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{s.tab}</p>
              <span className="text-xs text-white/50">Illustration</span>
            </div>
            <div className="mt-5 min-h-[11rem]"><Visual id={s.id} /></div>
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-success/15 px-4 py-2.5 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-success" />{s.status}
            </div>
          </div>
        </div>
      </div>

      {/* tabs with progress */}
      <div className="absolute inset-x-0 bottom-6">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4" role="tablist">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`group min-w-[4.5rem] flex-1 text-left text-xs font-semibold transition ${i === active ? "text-white" : "text-white/50 hover:text-white/80"}`}
            >
              <span className="relative block h-1 overflow-hidden rounded-full bg-white/15">
                {i === active && (
                  <span
                    key={`${active}-${paused}`}
                    className="anim-progress bg-orange-gradient absolute inset-0 origin-left"
                    style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
              </span>
              <span className="mt-2 block whitespace-nowrap">{sl.tab}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}