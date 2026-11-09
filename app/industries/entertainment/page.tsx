import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) return { title: "Industry not found" };
  const title = `Digital marketing for ${i.name}`;
  return {
    title,
    description: i.intro,
    alternates: { canonical: `/industries/${i.slug}` },
    openGraph: { title: `${title} | Nirmata Digital`, description: i.intro, url: `/industries/${i.slug}`, type: "website" },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  const helpful = ind.services
    .map((sl) => services.find((s) => s.slug === sl))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="bg-hero relative overflow-hidden">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-32 -top-10 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-12 md:pb-20 md:pt-20">
          <p className="inline-flex rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
            Industries
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] md:text-6xl">
            Digital growth for <span className="text-orange-gradient">{ind.name}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{ind.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/free-audit">Get a free audit →</Button>
            <Button href="/work" variant="outline">See our work</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Problems we often see</h2>
        <ul className="mt-6 space-y-3">
          {ind.challenges.map((c) => (
            <li key={c} className="rounded-2xl border border-line bg-card p-5 text-sm text-fg">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-soft py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl">How we can help</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {helpful.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-1"
              >
                <p className="font-mono text-xs text-muted">{s.pillar}</p>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient rounded-3xl p-10 text-center md:p-14">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-navy md:text-4xl">
            Let&apos;s look at your business
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
            <Button href="/contact" variant="outline">Talk to us</Button>
          </div>
        </div>
      </section>
    </>
  );
}