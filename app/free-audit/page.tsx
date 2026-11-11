import type { Metadata } from "next";
import FaqWithHelp from "@/components/FaqWithHelp";
import RevealObserver from "@/components/RevealObserver";
import AuditForm from "./AuditForm";

export const metadata: Metadata = {
  title: "Free Digital Audit",
  description:
    "Get a free review of your website, ads and Google listing, with a short list of the fixes most likely to bring in more enquiries.",
};

const gets = [
  { title: "Website review", text: "How fast it loads on a phone, how clear it is, and whether visitors can call or message you easily." },
  { title: "Ads review", text: "Whether your Meta and Google ads are tracked, and where the spend may be going to waste." },
  { title: "Google listing check", text: "Your Google Business Profile: details, photos, reviews and how you show up on local searches." },
  { title: "A short fix list", text: "The few changes most likely to bring in more enquiries, in the order we would do them." },
];

const steps = [
  { title: "Send your details", text: "Fill the short form. It opens WhatsApp with everything ready." },
  { title: "We review", text: "We look at your website, ads and listing." },
  { title: "You get the list", text: "A clear list of what to fix first, in plain English." },
  { title: "Decide at your pace", text: "If you want help, we send a proposal. If not, the audit is still yours." },
];

const faqs = [
  { q: "Is the audit really free?", a: "Yes. There is no payment and no obligation. You keep the audit whether or not you work with us." },
  { q: "What do you need from me?", a: "Your business name, a way to reach you, and your website or Instagram link if you have one. No passwords are needed." },
  { q: "Do I need a website to ask?", a: "No. If you are starting out, we review your Google listing and social pages and tell you what to set up first." },
  { q: "How soon will you reply?", a: "We reply on WhatsApp within a few hours during working hours." },
  { q: "Will you push me to buy something?", a: "No. If we think a service would help, we explain why and what it costs. The decision is yours." },
];

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function FreeAuditPage() {
  return (
    <>
      <RevealObserver />

      <section className="bg-hero relative overflow-hidden">
        <div aria-hidden className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-80 w-80 rounded-full opacity-20 blur-3xl dark:opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 pb-20 pt-10 md:pb-28 lg:grid-cols-[1fr_0.95fr]">
          <div className="lg:pt-6">
            <p className="eyebrow text-orange anim-fade">Free, no obligation</p>
            <h1 style={{ animationDelay: "0.1s" }} className="anim-fade mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Find out what is holding your business back <span className="text-orange-gradient">online.</span>
            </h1>
            <p style={{ animationDelay: "0.2s" }} className="anim-fade mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We review your website, ads and Google listing, then send a short list of the fixes most likely to bring in more enquiries. No pressure and no jargon.
            </p>

            <ul className="mt-9 space-y-4">
              {gets.map((g, i) => (
                <li key={g.title} style={{ animationDelay: `${0.3 + i * 0.1}s` }} className="anim-fade flex gap-4">
                  <span className="bg-navy-gradient mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md">
                    <Tick />
                  </span>
                  <div>
                    <p className="font-semibold text-heading">{g.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{g.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28" style={{ animationDelay: "0.25s" }}>
            <div className="anim-fade relative">
              <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-orange-gradient opacity-15 blur-2xl" />
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-orange">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] md:text-4xl">From your message to a clear plan</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal card-hover rounded-3xl border border-line bg-card p-7">
              <span className="bg-orange-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-navy">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqWithHelp faqs={faqs} title="Questions about the audit" subtitle="Quick answers before you send your details." />
    </>
  );
}