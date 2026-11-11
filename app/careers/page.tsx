import type { Metadata } from "next";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our Mumbai digital agency. See open roles or send us your portfolio.",
};

/* ───────── EDIT HERE ───────── */

const CAREERS_EMAIL = "careers@yourdomain.com"; // replace with your real address

// Add only roles you are really hiring for. Leave empty to show the "no openings" message.
const openings: { title: string; type: string; location: string; summary: string }[] = [
  // { title: "Performance Marketer", type: "Full-time", location: "Mumbai", summary: "Run Meta and Google Ads for local clients." },
];

const perks = [
  { title: "Real client work", text: "You work on live projects from your first month." },
  { title: "Learn across disciplines", text: "Content, ads, web and AI sit in one team, so you pick up all of it." },
  { title: "Clear feedback", text: "Regular reviews so you know where you stand." },
  { title: "Flexible about how", text: "We care about results and communication, not hours at a desk." },
];

const howToApply = [
  "Send your CV or portfolio link.",
  "Tell us in 3 to 4 lines what you want to work on.",
  "We reply within a week, then do a short call and a small paid or practical task.",
];

/* ───────── PAGE ───────── */

export default function CareersPage() {
  const subject = encodeURIComponent("Application: (role name)");
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi, I'd like to apply to work with you.")}`;

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-32 md:pb-24 md:pt-40">
          <p className="eyebrow text-orange">Careers</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">
            Build things that bring real results for real businesses
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            We are a small Mumbai team across content, growth, web and AI. If you like owning your work and seeing the numbers it moves, we would like to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">Open roles</h2>
        {openings.length > 0 ? (
          <div className="mt-8 grid gap-4">
            {openings.map((o) => (
              <article key={o.title} className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-7 shadow-layered md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{o.title}</h3>
                  <p className="mt-1 text-xs text-orange">{o.type} · {o.location}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{o.summary}</p>
                </div>
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("Application: " + o.title)}`}
                  className="bg-orange-gradient inline-block shrink-0 rounded-full px-6 py-3 text-center text-sm font-semibold text-navy transition hover:brightness-105"
                >
                  Apply by email
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-line bg-card p-8 shadow-layered">
            <p className="text-lg font-semibold text-heading">No open roles right now</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              We still like meeting good people. Send your CV or portfolio and tell us what you would like to do. We keep it on file for when a role opens.
            </p>
          </div>
        )}
      </section>

      <section className="dot-grid bg-soft py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Why work with us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="rounded-3xl border border-line bg-card p-7 shadow-layered">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">How to apply</h2>
        <ol className="mt-8 max-w-2xl space-y-4">
          {howToApply.map((s, i) => (
            <li key={s} className="flex gap-4 text-base text-fg">
              <span className="bg-orange-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-navy">{i + 1}</span>
              <span className="pt-1">{s}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${subject}`}
            className="bg-orange-gradient inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-105"
          >
            Email your CV
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-heading transition hover:border-heading"
          >
            Message on WhatsApp
          </a>
          <Button href="/contact" variant="outline">Contact us</Button>
        </div>
      </section>
    </>
  );
}
