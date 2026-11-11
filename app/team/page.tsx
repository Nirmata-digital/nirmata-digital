import type { Metadata } from "next";
import Link from "next/link";
import TeamGrid from "@/components/TeamGrid";
import { team, companyPhotos, employeePhotos, type CulturePhoto } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind Nirmata Digital and see what life at our company looks like.",
};

function PhotoGrid({ photos }: { photos: CulturePhoto[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {photos.map((p, i) => (
        <figure key={`${p.alt}-${i}`} className="group overflow-hidden rounded-2xl border border-line bg-card">
          {p.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="bg-navy-gradient flex aspect-[4/3] w-full items-center justify-center px-3 text-center text-xs text-white/70">
              Photo coming soon
            </div>
          )}
          {p.caption && <figcaption className="px-3 py-2.5 text-xs font-medium text-muted">{p.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-28">
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-orange">Our team</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          The people behind Nirmata Digital
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          A small team of designers, developers, marketers and creators. Tap any card to read more about the person.
        </p>
      </section>

      {/* Members */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <TeamGrid members={team} />
      </section>

      {/* Culture */}
      <section className="bg-soft py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-orange">Life at Nirmata</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading">Our company culture</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We work hard, learn together and celebrate often. Here is a look at our workspace and the people who make it fun.
          </p>

          <h3 className="mt-12 text-lg font-semibold text-heading">Our workspace</h3>
          <PhotoGrid photos={companyPhotos} />

          <h3 className="mt-14 text-lg font-semibold text-heading">Our people, together</h3>
          <PhotoGrid photos={employeePhotos} />
        </div>
      </section>

      {/* Careers CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-navy-gradient flex flex-wrap items-center justify-between gap-6 rounded-3xl px-8 py-10 text-white">
          <div>
            <h2 className="text-2xl font-semibold">Want to join us?</h2>
            <p className="mt-2 max-w-md text-sm text-white/75">See our open roles and send us your application.</p>
          </div>
          <Link
            href="/careers"
            className="bg-orange-gradient rounded-full px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-105"
          >
            View careers
          </Link>
        </div>
      </section>
    </main>
  );
}
