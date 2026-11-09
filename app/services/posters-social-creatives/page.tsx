import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service not found" };
  return {
    title: s.title,
    description: s.intro,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | Nirmata Digital`, description: s.intro, url: `/services/${s.slug}`, type: "website" },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const related = services.filter((x) => x.pillar === s.pillar && x.slug !== s.slug);

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-12 md:pb-20 md:pt-20">
          <Link href="/services" className="text-sm font-semibold text-muted hover:text-heading">
            ← All services
          </Link>
          <p className="mt-6 inline-flex rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            {s.pillar}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">{s.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/free-audit">Get a free audit →</Button>
            <Button href="/contact" variant="outline">Talk to us</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">What is included</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {s.includes.map((i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-line bg-card p-5 text-sm text-fg">
              <span className="mt-0.5 shrink-0 text-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              {i}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-3xl border border-line bg-soft p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Good for</p>
          <p className="mt-3 text-base leading-relaxed text-heading">{s.goodFor}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-soft py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-semibold md:text-3xl">More in {s.pillar}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted">{r.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient rounded-3xl p-10 text-center md:p-14">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy/80">Our free audit tells you what to fix first.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
            <Button href="/packages" variant="outline">See packages</Button>
          </div>
        </div>
      </section>
    </>
  );
}