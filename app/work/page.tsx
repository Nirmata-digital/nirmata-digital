import type { Metadata } from "next";
import Button from "@/components/Button";
import WorkGrid from "@/components/WorkGrid";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Nirmata Digital: websites, Google listings, ad campaigns, content and automation. Each shows the problem, what we did and the result.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Nirmata Digital",
    description:
      "Case studies from Nirmata Digital: websites, Google listings, ad campaigns, content and automation.",
    url: "/work",
    type: "website",
  },
};

const intro = {
  badge: "Work",
  titleStart: "Work that shows",
  titleAccent: "the problem and the result.",
  text: "Every case study follows the same three parts: the problem, what we did, and a result with a number. Projects marked as samples show the format until real client results replace them.",
};

const includes = [
  { title: "The problem", text: "What was not working, in plain words." },
  { title: "What we did", text: "The steps we took, so you can see how we work." },
  { title: "The result", text: "A real number, never an invented one." },
];

export default function WorkPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-20 md:pt-20">
          <p className="inline-flex rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            {intro.badge}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            {intro.titleStart} <span className="text-orange-gradient">{intro.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro.text}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        <WorkGrid />
      </section>

      <section className="bg-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-orange-gradient inline-block font-mono text-xs font-semibold uppercase tracking-widest">
              How we show results
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Every case study has three parts
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {includes.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-line bg-card p-7">
                <span className="bg-orange-gradient flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold text-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-5xl">
            Want results like these for your business?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy/80">
            Start with a free audit and we will tell you what to fix first.
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