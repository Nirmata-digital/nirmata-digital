"use client";

import { useState } from "react";

const STAGE_MS = 3800;

const tabs = ["Content", "Growth", "Web", "Automation", "AI / ML"] as const;

const stages = [
  { label: "Content", tab: "Content", icon: "content", head: "Content people remember.", text: "Reels, posters and photos in one consistent style, planned a month at a time.", status: "Monthly content plan ready" },
  { label: "Ads", tab: "Growth", icon: "target", head: "Ads that are tracked.", text: "Meta and Google ads, with every call, form and WhatsApp chat counted.", status: "Conversion tracking active" },
  { label: "Website", tab: "Web", icon: "web", head: "A site that turns visits into enquiries.", text: "Fast, mobile-first pages with call and WhatsApp buttons built in.", status: "Tested on real phones" },
  { label: "Follow-up", tab: "Automation", icon: "chat", head: "No enquiry left waiting.", text: "WhatsApp replies and reminders that start within seconds.", status: "Zero missed leads" },
  { label: "Dashboard", tab: "Automation", icon: "chart", head: "See what each rupee brings back.", text: "One screen for leads, spend and results, in plain numbers.", status: "Live from your data" },
  { label: "ML models", tab: "AI / ML", icon: "brain", head: "Custom AI, trained on your data.", text: "Lead scoring, forecasting and recommendations built for your business.", status: "Trained on your data" },
];

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const p: Record<string, React.ReactNode> = {
    content: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 9.5v5l4.5-2.5z" /></>),
    target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>),
    web: (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>),
    chat: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
    chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
    brain: (<><circle cx="6" cy="7" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><path d="M8 7l2.5 4M8 17l2.5-4M14 12h2" /></>),
    pause: <path d="M8 5v14M16 5v14" />,
    play: <path d="M7 5l12 7-12 7z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {p[name]}
    </svg>
  );
}

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = stages[active];
  const next = () => setActive((a) => (a + 1) % stages.length);

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-orange-gradient opacity-20 blur-3xl" aria-hidden />
      <div className="bg-navy-gradient overflow-hidden rounded-3xl border border-white/10 text-white shadow-[0_30px_80px_rgba(10,26,63,0.45)]">
        {/* Tabs + pause */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Service areas">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={s.tab === t}
                onClick={() => setActive(stages.findIndex((x) => x.tab === t))}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                  s.tab === t ? "bg-white/15 text-white ring-1 ring-white/30" : "text-white/60 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play animation" : "Pause animation"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/80 hover:text-white"
          >
            <Icon name={paused ? "play" : "pause"} className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Top line fills, then the next page opens */}
        <div className="h-0.5 bg-white/10">
          <div
            key={active}
            onAnimationEnd={next}
            className="anim-progress bg-orange-gradient h-full"
            style={{ animationDuration: `${STAGE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
          />
        </div>

        <div className="px-6 pb-8 pt-7 md:px-8">
          <div key={active} aria-live="polite" className="anim-fade min-h-[8rem]">
            <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">{s.head}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{s.text}</p>
          </div>

          {/* Flow */}
          <div className="mt-6 flex flex-col items-center">
            <div className="rounded-xl border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold shadow-lg">Nirmata Digital</div>
            <div className="h-6 w-px bg-white/30" />
            <div className="relative w-full">
              <div className="absolute left-[8.3%] right-[8.3%] top-0 h-px bg-white/30" />
              <div className="grid grid-cols-6">
                {stages.map((n, i) => (
                  <button key={n.label} type="button" onClick={() => setActive(i)} aria-label={n.label} className="group flex flex-col items-center">
                    <span className={`h-6 w-px transition ${i === active ? "bg-orange" : "bg-white/30"}`} />
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 sm:h-12 sm:w-12 ${
                        i === active
                          ? "bg-orange-gradient anim-pulse-btn text-navy shadow-[0_0_0_4px_rgba(255,255,255,0.15),0_10px_30px_rgba(255,122,26,0.45)]"
                          : "bg-white/15 text-white group-hover:bg-white/25"
                      }`}
                    >
                      <Icon name={n.icon} className="h-5 w-5" />
                    </span>
                    <span className={`mt-2 text-[10px] font-semibold sm:text-xs ${i === active ? "text-white" : "text-white/60"}`}>{n.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 px-6 py-3 text-xs text-white/60">
          <span className="anim-node h-2 w-2 rounded-full bg-success" />
          <span key={active} className="anim-fade">{s.status}</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-white/50">Illustration of how our services connect</p>
    </div>
  );
}