import Button from "@/components/Button";
import Card from "@/components/Card";

const pillars = [
  { label: "Pillar 01", title: "Growth", text: "Ads, SEO and tracking that show what brings in customers." },
  { label: "Pillar 02", title: "Web", text: "Fast, mobile-first websites built to turn visitors into enquiries." },
  { label: "Pillar 03", title: "Content", text: "Videos, reels and posters that keep your brand consistent." },
  { label: "Pillar 04", title: "Automation and Apps", text: "WhatsApp, CRM and workflow tools that save hours every week." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden pb-24 pt-10 md:pb-32 md:pt-16">
        <div
          aria-hidden
          className="bg-orange-gradient pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full opacity-20 blur-3xl dark:opacity-30"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
              Digital agency · Mumbai
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-7xl">
              Grow online. <span className="text-orange-gradient">Measure everything.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Placeholder: one clear sentence about what you do and who it is for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/free-audit">Get a free audit →</Button>
              <Button href="/work" variant="outline">See our work</Button>
            </div>
          </div>

          <div className="bg-navy-gradient rounded-3xl border border-white/10 p-6 text-white shadow-2xl md:p-8">
            <p className="font-mono text-xs text-white/70">FOUR PILLARS</p>
            <p className="mt-4 text-2xl font-semibold md:text-3xl">
              One team. Every channel. Clear results.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Growth", "Web", "Content", "Automation"].map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-sm font-semibold"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">What we do</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <Card key={p.title} label={p.label} title={p.title}>
                {p.text}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="bg-orange-gradient rounded-3xl p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            Want to know what is holding your business back online?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy/80">
            Placeholder: describe what the free audit checks.
          </p>
          <div className="mt-6">
            <Button href="/free-audit" variant="dark">Get a free audit →</Button>
          </div>
        </div>
      </section>
    </>
  );
}