"use client";

import { useState } from "react";

/* Time each scene stays on screen. The progress line fills, then the next scene opens. */
const STAGE_MS = 5200;

type Vars = Record<string, string | number>;
const v = (vars: Vars) => vars as unknown as React.CSSProperties;

const stages = [
  { key: "overview", label: "Overview", head: "Everything your growth needs, in one place.", text: "Content, ads, website, automation and AI, run by one team and tracked on one dashboard.", status: "All services connected" },
  { key: "content", label: "Content", head: "Content people remember.", text: "Reels, posters and photos in one consistent style, planned a month at a time.", status: "Monthly content plan ready" },
  { key: "ads", label: "Ads", head: "Ads that are tracked.", text: "Meta and Google ads, with every call, form and WhatsApp chat counted.", status: "Conversion tracking active" },
  { key: "website", label: "Website", head: "A site that turns visits into enquiries.", text: "Fast, mobile-first pages with call and WhatsApp buttons built in.", status: "Tested on real phones" },
  { key: "followup", label: "Follow-up", head: "No enquiry left waiting.", text: "WhatsApp replies and reminders that start within seconds.", status: "Zero missed leads" },
  { key: "dashboard", label: "Dashboard", head: "See what each rupee brings back.", text: "One screen for leads, spend and results, in plain numbers.", status: "Live from your data" },
  { key: "ml", label: "AI / ML", head: "Custom AI, trained on your data.", text: "Lead scoring, forecasting and recommendations built for your business.", status: "Trained on your data" },
] as const;

/* ───────────── small helpers ───────────── */

function Icon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const p: Record<string, React.ReactNode> = {
    chat: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
    call: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    form: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    pause: <path d="M8 5v14M16 5v14" />,
    play: <path d="M7 5l12 7-12 7z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {p[name]}
    </svg>
  );
}

/* Number that counts up with pure CSS (see hs-count in globals.css) */
function Count({ to, delay = 0, dur = 1.6, prefix = "", suffix = "" }: { to: number; delay?: number; dur?: number; prefix?: string; suffix?: string }) {
  return (
    <>
      {prefix}
      <span className="hs-count" style={v({ "--to": to, animationDelay: `${delay}s`, animationDuration: `${dur}s` })} />
      {suffix}
    </>
  );
}

const panel = "rounded-xl border border-white/10 bg-white/5";
const label = "text-[10px] font-semibold uppercase tracking-wider text-white/50";

/* ───────────── 1. OVERVIEW ───────────── */

function OverviewScene() {
  const chips = ["Content", "Ads", "Website", "Dashboard", "Automation", "AI / ML"];
  const bars = [34, 48, 41, 63, 56, 80, 100];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {chips.map((c, i) => (
          <div
            key={c}
            className="hs-chip flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white sm:text-xs"
            style={v({ "--d": `${0.1 + i * 0.1}s`, "--i": i })}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
            <span className="truncate">{c}</span>
          </div>
        ))}
      </div>

      <div className={`relative min-h-0 flex-1 p-3 ${panel}`}>
        <div className="absolute inset-x-3 bottom-3 top-3 flex flex-col justify-between" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-px w-full bg-white/10" />
          ))}
        </div>
        <div className="relative flex h-full items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <div
                className={`hs-rise w-full rounded-t-md ${i === bars.length - 1 ? "bg-orange-gradient shadow-[0_0_24px_rgba(255,122,26,0.45)]" : "bg-white/25"}`}
                style={v({ height: `${h}%`, "--d": `${0.5 + i * 0.1}s` })}
              />
            </div>
          ))}
          <div className="hs-pop absolute right-[16%] top-0 rounded-md bg-white px-2 py-1 text-[10px] font-bold text-navy shadow-lg" style={v({ "--d": "1.8s" })}>
            +38% enquiries
          </div>
        </div>
      </div>

      <div className="hs-pop flex items-center justify-between rounded-lg border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-[11px] text-white" style={v({ "--d": "2.2s" })}>
        <span className="flex items-center gap-2 font-semibold">
          <span className="anim-node h-2 w-2 rounded-full bg-emerald-400" />
          Every lead tracked
        </span>
        <span className="text-white/70">
          <b className="text-white"><Count to={248} delay={2.3} /></b> leads this month
        </span>
      </div>
    </div>
  );
}

/* ───────────── 2. CONTENT ───────────── */

function ContentScene() {
  const cells = Array.from({ length: 15 }, (_, i) => i);
  const tone = (i: number) => (i % 5 === 0 ? "bg-orange-gradient" : i % 3 === 0 ? "bg-white/70" : "bg-white/25");
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="relative min-h-0 flex-1">
        {/* Poster */}
        <div className="absolute inset-y-0 left-[7%] flex items-center">
          <div className="hs-left" style={v({ "--d": "0.15s" })}>
            <div className="hs-float" style={v({ "--r": "-7deg", "--ft": "4.6s", "--fd": "0s" })}>
              <div className="bg-orange-gradient relative h-[108px] w-[80px] rounded-xl p-2.5 shadow-xl">
                <div className="h-1.5 w-8 rounded bg-navy/70" />
                <div className="mt-2 h-3.5 w-14 rounded bg-navy" />
                <div className="mt-1.5 h-3.5 w-10 rounded bg-navy" />
                <div className="mt-2.5 h-1 w-full rounded bg-navy/40" />
                <div className="mt-1 h-1 w-3/4 rounded bg-navy/40" />
                <div className="mt-2.5 h-4 w-12 rounded-full bg-white" />
                <span className="absolute bottom-1.5 left-2.5 text-[8px] font-bold tracking-wider text-navy/80">POSTER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reel */}
        <div className="absolute inset-y-0 left-1/2 z-10 -ml-[42px] flex items-center">
          <div className="hs-pop" style={v({ "--d": "0.35s" })}>
            <div className="hs-float" style={v({ "--r": "0deg", "--ft": "3.8s", "--fd": "0.4s" })}>
              <div className="bg-navy-gradient relative h-[150px] w-[84px] overflow-hidden rounded-2xl border border-white/30 shadow-2xl">
                <span className="absolute left-2 top-2 rounded bg-white/90 px-1 py-0.5 text-[8px] font-bold text-navy">REEL · 0:15</span>
                <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-gradient text-navy">
                  <span className="hs-ping absolute inset-0 rounded-full bg-orange/50" />
                  <Icon name="play" className="relative h-4 w-4" />
                </span>
                <div className="absolute bottom-7 right-1.5 flex flex-col gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3.5 w-3.5 rounded-full bg-white/25" />
                  ))}
                </div>
                <div className="absolute inset-x-2 bottom-2 h-1 overflow-hidden rounded-full bg-white/25">
                  <div className="hs-fillw h-full rounded-full bg-orange-gradient" style={v({ "--w": "100%", "--d": "0.6s", animationDuration: "4s" })} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="absolute inset-y-0 right-[7%] flex items-center">
          <div className="hs-right" style={v({ "--d": "0.25s" })}>
            <div className="hs-float" style={v({ "--r": "6deg", "--ft": "5s", "--fd": "0.8s" })}>
              <div className="relative h-[98px] w-[92px] overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-xl">
                <svg viewBox="0 0 92 98" className="h-full w-full" aria-hidden>
                  <circle cx="64" cy="26" r="9" fill="#ffa13a" />
                  <path d="M0 98V68l22-22 20 20 14-12 36 34v10z" fill="rgba(255,255,255,0.28)" />
                  <path d="M0 98V82l26-18 24 18 14-8 28 24z" fill="rgba(255,255,255,0.18)" />
                </svg>
                <span className="absolute left-1.5 top-1.5 rounded bg-white/90 px-1 py-0.5 text-[8px] font-bold text-navy">PHOTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${panel} p-3`}>
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold text-white">Monthly plan</span>
          <span className="text-white/70">
            <b className="text-white"><Count to={30} delay={1} dur={1.8} /></b> posts scheduled
          </span>
        </div>
        <div className="mt-2 grid gap-1" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
          {cells.map((i) => (
            <span key={i} className={`hs-pop h-4 rounded-[4px] ${tone(i)}`} style={v({ "--d": `${1 + i * 0.09}s` })} />
          ))}
        </div>
        <div className="mt-2 flex gap-4 text-[9px] text-white/60">
          <span className="flex items-center gap-1.5"><span className="bg-orange-gradient h-2 w-2 rounded-sm" />Reel</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-white/70" />Poster</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-white/25" />Photo</span>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 3. ADS ───────────── */

function AdsScene() {
  const kpis = [
    { label: "Ad spend", prefix: "₹", to: 42, suffix: "K" },
    { label: "Leads", prefix: "", to: 186, suffix: "" },
    { label: "Cost per lead", prefix: "₹", to: 226, suffix: "" },
  ];
  const events = [
    { icon: "call", name: "Phone call", src: "Meta Ads" },
    { icon: "form", name: "Enquiry form", src: "Google Ads" },
    { icon: "chat", name: "WhatsApp chat", src: "Meta Ads" },
  ];
  const line = "M0,70 L40,62 L80,66 L120,48 L160,52 L200,30 L240,34 L300,10";
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((k, i) => (
          <div key={k.label} className={`hs-pop px-3 py-2 ${panel}`} style={v({ "--d": `${0.1 + i * 0.12}s` })}>
            <p className="text-[10px] text-white/55">{k.label}</p>
            <p className="mt-0.5 text-base font-semibold text-white">
              <Count to={k.to} prefix={k.prefix} suffix={k.suffix} delay={0.3 + i * 0.12} />
            </p>
          </div>
        ))}
      </div>

      <div className={`relative h-[88px] overflow-hidden ${panel}`}>
        <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="ads-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.45" />
              <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L300,80 L0,80 Z`} fill="url(#ads-fill)" className="hs-fade" style={v({ "--d": "1.2s" })} />
          <path d={line} pathLength={1} fill="none" stroke="#ffa13a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hs-draw" style={v({ "--d": "0.5s" })} />
        </svg>
        <div className="absolute left-2.5 top-2 flex items-center gap-1.5 text-[9px] font-semibold text-white">
          <span className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300">
            <span className="anim-node h-1.5 w-1.5 rounded-full bg-emerald-400" />Live
          </span>
          <span className="rounded-full bg-white/10 px-2 py-0.5">Meta Ads</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5">Google Ads</span>
        </div>
      </div>

      <div className="space-y-1.5">
        {events.map((e, i) => (
          <div key={e.name} className="hs-right flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[11px]" style={v({ "--d": `${1.6 + i * 0.55}s` })}>
            <span className="flex items-center gap-2 text-white">
              <span className="bg-orange-gradient flex h-5 w-5 items-center justify-center rounded-md text-navy">
                <Icon name={e.icon} className="h-3 w-3" />
              </span>
              {e.name}
              <span className="text-white/45">· {e.src}</span>
            </span>
            <span className="hs-pop flex items-center gap-1 font-semibold text-emerald-300" style={v({ "--d": `${1.95 + i * 0.55}s` })}>
              <Icon name="check" className="h-3 w-3" />Tracked
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── 4. WEBSITE ───────────── */

function WebsiteScene() {
  const rings = [
    { name: "Speed", score: 98 },
    { name: "SEO", score: 100 },
    { name: "Mobile", score: 100 },
  ];
  return (
    <div className="flex h-full gap-3">
      <div className="hs-left flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/15 bg-white/5" style={v({ "--d": "0.1s" })}>
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/35" />
            ))}
          </span>
          <span className="flex-1 truncate rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/85">
            <span className="hs-type" style={v({ "--w": "15ch", "--d": "0.5s" })}>yourbusiness.in</span>
          </span>
        </div>
        <div className="relative flex-1 p-3">
          <div className="hs-grow h-2.5 w-3/4 rounded bg-white/60" style={v({ "--d": "1.2s" })} />
          <div className="hs-grow mt-1.5 h-2.5 w-1/2 rounded bg-white/60" style={v({ "--d": "1.35s" })} />
          <div className="hs-grow mt-3 h-1.5 w-full rounded bg-white/20" style={v({ "--d": "1.5s" })} />
          <div className="hs-grow mt-1.5 h-1.5 w-5/6 rounded bg-white/20" style={v({ "--d": "1.6s" })} />
          <div className="mt-3 flex gap-2">
            <span className="hs-pop bg-orange-gradient rounded-full px-3 py-1 text-[10px] font-bold text-navy" style={v({ "--d": "1.9s" })}>Call now</span>
            <span className="hs-pop rounded-full border border-white/30 px-3 py-1 text-[10px] font-semibold text-white" style={v({ "--d": "2.05s" })}>Get a quote</span>
          </div>
          <div className="hs-pop mt-3 grid grid-cols-3 gap-1.5" style={v({ "--d": "2.2s" })}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-9 rounded-md bg-white/10" />
            ))}
          </div>
          <span className="hs-pop absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg" style={v({ "--d": "2.6s" })}>
            <span className="hs-ping absolute inset-0 rounded-full bg-emerald-400/60" />
            <Icon name="chat" className="relative h-4 w-4" />
          </span>
          <span className="hs-pop absolute bottom-3 right-14 flex h-8 w-8 items-center justify-center rounded-full bg-orange-gradient text-navy shadow-lg" style={v({ "--d": "2.8s" })}>
            <Icon name="call" className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="hidden w-[34%] shrink-0 flex-col justify-between gap-2 sm:flex">
        {rings.map((r, i) => (
          <div key={r.name} className={`hs-right flex flex-1 items-center gap-2.5 px-2.5 ${panel}`} style={v({ "--d": `${0.4 + i * 0.2}s` })}>
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
              <svg viewBox="0 0 44 44" className="absolute inset-0 -rotate-90" aria-hidden>
                <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
                <circle
                  cx="22" cy="22" r="18" fill="none" stroke="#ffa13a" strokeWidth="4" strokeLinecap="round"
                  className="hs-ring"
                  style={v({ "--len": 113.1, "--off": (113.1 * (1 - r.score / 100)).toFixed(1), "--d": `${0.8 + i * 0.2}s` })}
                />
              </svg>
              <b className="text-[11px] text-white"><Count to={r.score} delay={0.8 + i * 0.2} /></b>
            </span>
            <span className="text-[11px] font-semibold text-white/80">{r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── 5. FOLLOW-UP ───────────── */

function FollowUpScene() {
  const steps = ["Enquiry in", "Reply in 2s", "Reminder, day 2", "Call booked"];
  return (
    <div className="flex h-full gap-3">
      <div className="hs-left flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/15 bg-white/5" style={v({ "--d": "0.1s" })}>
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Icon name="chat" className="h-3 w-3" />
          </span>
          <div>
            <p className="text-[11px] font-semibold leading-tight text-white">New enquiry</p>
            <p className="text-[9px] leading-tight text-emerald-300">WhatsApp · online</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="hs-pop max-w-[82%] self-start rounded-2xl rounded-tl-sm bg-white/15 px-3 py-2 text-[11px] text-white" style={v({ "--d": "0.5s" })}>
            Hi, I need a quote for a website.
          </div>

          <div className="relative h-[66px]">
            <div className="hs-vanish absolute right-0 top-0 rounded-2xl rounded-tr-sm bg-white/15 px-3 py-2.5" style={v({ "--d": "1.2s" })}>
              <span className="hs-dots flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </div>
            <div className="hs-pop absolute right-0 top-0 max-w-[90%] rounded-2xl rounded-tr-sm bg-emerald-500/90 px-3 py-2 text-[11px] text-white" style={v({ "--d": "2.3s" })}>
              Hi! Thanks for reaching out. Sending our packages now.
              <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-white/85">
                2s
                <span className="flex text-sky-200">
                  <Icon name="check" className="h-2.5 w-2.5" />
                  <Icon name="check" className="-ml-1 h-2.5 w-2.5" />
                </span>
              </span>
            </div>
          </div>

          <div className="hs-pop self-center rounded-full border border-orange/50 bg-orange/15 px-3 py-1 text-[10px] font-semibold text-white" style={v({ "--d": "3.4s" })}>
            Reminder scheduled · Day 2
          </div>
        </div>
      </div>

      <div className={`hs-right hidden w-[34%] shrink-0 flex-col p-3 sm:flex ${panel}`} style={v({ "--d": "0.3s" })}>
        <p className={label}>Response time</p>
        <p className="mt-0.5 text-2xl font-semibold text-white">
          <Count to={2} suffix="s" delay={1.6} dur={0.8} />
        </p>
        <div className="relative mt-3 flex flex-1 flex-col justify-between pl-4">
          <span className="absolute bottom-1 left-[4px] top-1 w-px bg-white/15" />
          <span className="hs-growy absolute bottom-1 left-[4px] top-1 w-px bg-orange" style={v({ "--d": "0.6s" })} />
          {steps.map((s, i) => (
            <div key={s} className="relative text-[10px] font-semibold text-white/85">
              <span className="hs-dot absolute -left-[16px] top-0.5 h-2.5 w-2.5 rounded-full border-2" style={v({ "--d": `${0.6 + i * 0.9}s` })} />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────── 6. DASHBOARD ───────────── */

function DashboardScene() {
  const kpis = [
    { name: "Leads", to: 248, prefix: "", suffix: "", delta: "+18%" },
    { name: "Ad spend", to: 64, prefix: "₹", suffix: "K", delta: "+6%" },
    { name: "Cost per lead", to: 258, prefix: "₹", suffix: "", delta: "-12%" },
  ];
  const sources = [
    { name: "Meta Ads", n: 112 },
    { name: "Google Ads", n: 78 },
    { name: "Google Business", n: 38 },
    { name: "SEO", n: 20 },
  ];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((k, i) => (
          <div key={k.name} className={`hs-pop px-3 py-2 ${panel}`} style={v({ "--d": `${0.1 + i * 0.12}s` })}>
            <p className="text-[10px] text-white/55">{k.name}</p>
            <div className="mt-0.5 flex items-baseline justify-between gap-1">
              <p className="text-base font-semibold text-white">
                <Count to={k.to} prefix={k.prefix} suffix={k.suffix} delay={0.3 + i * 0.12} />
              </p>
              <span className="hs-pop rounded bg-emerald-400/15 px-1 text-[9px] font-bold text-emerald-300" style={v({ "--d": `${1.2 + i * 0.12}s` })}>{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 gap-3">
        <div className={`hs-pop min-w-0 flex-1 p-3 ${panel}`} style={v({ "--d": "0.6s" })}>
          <p className={label}>Leads by source</p>
          <div className="mt-2.5 space-y-2.5">
            {sources.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-[11px] text-white/80">
                  <span>{s.name}</span>
                  <b className="text-white"><Count to={s.n} delay={0.9 + i * 0.15} /></b>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`hs-grow h-full rounded-full ${i === 0 ? "bg-orange-gradient" : "bg-white/50"}`}
                    style={v({ width: `${(s.n / 112) * 100}%`, "--d": `${0.9 + i * 0.15}s` })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`hs-pop hidden w-[34%] shrink-0 flex-col items-center justify-center p-3 sm:flex ${panel}`} style={v({ "--d": "0.8s" })}>
          <span className="relative flex h-[84px] w-[84px] items-center justify-center">
            <svg viewBox="0 0 84 84" className="absolute inset-0 -rotate-90" aria-hidden>
              <circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
              <circle
                cx="42" cy="42" r="34" fill="none" stroke="#ff7a1a" strokeWidth="8" strokeLinecap="round"
                className="hs-ring"
                style={v({ "--len": 213.6, "--off": (213.6 * (1 - 0.78)).toFixed(1), "--d": "1.2s" })}
              />
            </svg>
            <b className="text-lg text-white"><Count to={312} suffix="%" delay={1.2} dur={1.4} /></b>
          </span>
          <p className="mt-2 text-center text-[10px] text-white/60">Return on ad spend</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 7. AI / ML ───────────── */

function NetworkGraph() {
  const layers = [3, 4, 4, 1];
  const xs = [20, 64, 108, 150];
  const pos = layers.map((n, li) =>
    Array.from({ length: n }, (_, i) => ({ x: xs[li], y: 70 + (i - (n - 1) / 2) * (n === 4 ? 30 : 38) }))
  );
  return (
    <svg viewBox="0 0 170 140" className="h-full w-full" aria-hidden>
      {pos.map((layer, li) => (
        <g key={li} className="hs-fade" style={v({ "--d": `${0.3 + li * 0.4}s` })}>
          {li > 0 &&
            pos[li - 1].flatMap((a, ai) =>
              layer.map((b, bi) => (
                <g key={`${ai}-${bi}`}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#ffa13a" strokeOpacity="0.55" strokeWidth="1" className="hs-flow" />
                </g>
              ))
            )}
          {layer.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={li === 3 ? 9 : 6}
              fill={li === 3 ? "#ff7a1a" : "#0a1a3f"}
              stroke="#ffa13a"
              strokeWidth="1.5"
              className="hs-node"
              style={v({ "--d": `${0.5 + li * 0.4 + i * 0.1}s` })}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function MlScene() {
  const leads = [
    { name: "Priya S.", score: 92, tag: "Hot" },
    { name: "Rahul M.", score: 78, tag: "Warm" },
    { name: "Anita K.", score: 54, tag: "Warm" },
    { name: "Vikram D.", score: 23, tag: "Cold" },
  ];
  return (
    <div className="flex h-full gap-3">
      <div className={`hs-left hidden w-[42%] shrink-0 flex-col p-2 sm:flex ${panel}`} style={v({ "--d": "0.1s" })}>
        <p className={`${label} px-1`}>Your model</p>
        <div className="min-h-0 flex-1">
          <NetworkGraph />
        </div>
        <div className="flex justify-between px-1 text-[9px] text-white/50">
          <span>Your data</span>
          <span>Prediction</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className={`hs-right flex-1 p-3 ${panel}`} style={v({ "--d": "0.3s" })}>
          <p className={label}>Lead score</p>
          <div className="mt-2.5 space-y-2.5">
            {leads.map((l, i) => (
              <div key={l.name} className="hs-pop flex items-center gap-2 text-[11px]" style={v({ "--d": `${0.9 + i * 0.25}s` })}>
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-[9px] font-bold text-white">{l.name[0]}</span>
                <span className="w-14 shrink-0 truncate text-white/85">{l.name}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className={`hs-grow block h-full rounded-full ${l.tag === "Hot" ? "bg-orange-gradient" : "bg-white/50"}`}
                    style={v({ width: `${l.score}%`, "--d": `${1 + i * 0.25}s` })}
                  />
                </span>
                <b className="w-6 text-right text-white"><Count to={l.score} delay={1 + i * 0.25} dur={1.2} /></b>
                <span className={`w-9 rounded px-1 py-0.5 text-center text-[9px] font-bold ${l.tag === "Hot" ? "bg-orange text-navy" : "bg-white/15 text-white/70"}`}>{l.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`hs-pop px-3 py-2.5 ${panel}`} style={v({ "--d": "2.2s" })}>
          <div className="flex justify-between text-[11px]">
            <span className="text-white/70">Model accuracy</span>
            <b className="text-white"><Count to={94} suffix="%" delay={2.3} dur={1.4} /></b>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <span className="hs-grow bg-orange-gradient block h-full rounded-full" style={v({ width: "94%", "--d": "2.3s", animationDuration: "1.4s" })} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── MAIN ───────────── */

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = stages[active];
  const next = () => setActive((a) => (a + 1) % stages.length);

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-orange-gradient opacity-20 blur-3xl" aria-hidden />
      <div className={`bg-navy-gradient overflow-hidden rounded-3xl border border-white/10 text-white shadow-[0_30px_80px_rgba(10,26,63,0.45)] ${paused ? "hs-paused" : ""}`}>
        {/* Tabs with progress lines + pause */}
        <div className="flex items-end gap-3 border-b border-white/10 px-4 pb-3 pt-4">
          <div className="grid flex-1 grid-cols-7 gap-1.5" role="tablist" aria-label="Services">
            {stages.map((st, i) => (
              <button key={st.key} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)} className="group text-left">
                <span className="block h-0.5 overflow-hidden rounded bg-white/15">
                  {i < active && <span className="bg-orange-gradient block h-full w-full" />}
                  {i === active && (
                    <span
                      key={active}
                      onAnimationEnd={next}
                      className="anim-progress bg-orange-gradient block h-full"
                      style={{ animationDuration: `${STAGE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  )}
                </span>
                <span className={`mt-2 block truncate text-[9px] font-semibold transition sm:text-[11px] ${i === active ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                  {st.label}
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play animation" : "Pause animation"}
            className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/20 text-white/80 transition hover:text-white"
          >
            <Icon name={paused ? "play" : "pause"} className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Heading for the current scene */}
        <div key={`head-${active}`} aria-live="polite" className="hs-fade min-h-[6.25rem] px-6 pt-5 md:px-7">
          <h2 className="text-xl font-semibold leading-snug text-white md:text-2xl">{s.head}</h2>
          <p className="mt-1.5 max-w-md text-xs leading-relaxed text-white/65 md:text-[13px]">{s.text}</p>
        </div>

        {/* Animated scene */}
        <div key={s.key} className="hs-scene relative mt-3 h-[290px] overflow-hidden px-5 pb-4 md:px-6">
          {s.key === "overview" && <OverviewScene />}
          {s.key === "content" && <ContentScene />}
          {s.key === "ads" && <AdsScene />}
          {s.key === "website" && <WebsiteScene />}
          {s.key === "followup" && <FollowUpScene />}
          {s.key === "dashboard" && <DashboardScene />}
          {s.key === "ml" && <MlScene />}
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 px-6 py-3 text-xs text-white/60">
          <span className="anim-node h-2 w-2 rounded-full bg-emerald-400" />
          <span key={`status-${active}`} className="hs-fade">{s.status}</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-white/50">Illustration with sample data</p>
    </div>
  );
}