
type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "Naman Waterproofing", logo: "/clients/naman-waterproofing.png" },
  {
    name: "Waghmare's Ayurvedic Acupressure Acupuncture Center",
    logo: "/clients/waghmares.png",
  },
  { name: "Paulwat Foundation, Vasai", logo: "/clients/paulwat-foundation.png" },
  { name: "St. Mary High School, Virar", logo: "/clients/st-mary-high-school.png" },
  { name: "ShreeChem kadi", logo: "/clients/shree-chem.png" },
  { name: "Shreeji Infraventure", logo: "/clients/shreeji-infraventure.png" },
  { name: "Vidyavardhini College", logo: "/clients/vidyavardhini.png" },
  { name: "Naikee Engineering", logo: "/clients/naikee-engineering.png" },
];

const industries = [
  "Healthcare",
  "Real Estate",
  "Education",
  "Engineering & Chemicals",
  "Services & NGOs",
];

function Card({ c }: { c: Client }) {
  return (
    <div className="group relative flex w-[245px] shrink-0 flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white px-7 py-9 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)] dark:border-white/[0.10] dark:bg-[#111b30]/90 dark:shadow-[0_12px_35px_rgba(0,0,0,0.22)] dark:hover:border-blue-400/50 dark:hover:bg-[#162440] dark:hover:shadow-[0_20px_55px_rgba(37,99,235,0.20)] md:w-[275px] md:py-11">

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-700 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-500/20" />

      {/* Logo container */}
      <div className="relative flex h-[115px] w-full items-center justify-center rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition-transform duration-500 group-hover:scale-[1.04] md:h-[130px] dark:border-gray-100/80">
        {c.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.logo}
            alt={`${c.name} logo`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-3xl font-bold text-white">
            {c.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Client name */}
      <div className="relative flex min-h-[40px] items-center justify-center">
        <span className="line-clamp-2 text-center text-sm font-semibold leading-relaxed text-slate-700 transition-colors duration-300 group-hover:text-blue-700 md:text-[15px] dark:text-white/75 dark:group-hover:text-white">
          {c.name}
        </span>
      </div>

      {/* Accent line */}
      <div className="h-[2px] w-8 rounded-full bg-blue-500/30 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-500 dark:bg-blue-500/40 dark:group-hover:bg-blue-400" />
    </div>
  );
}

export default function ClientsCarousel() {
  const loop = [...clients, ...clients];

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-[#080f1e] dark:text-white">

      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-400/[0.06] blur-[140px] dark:bg-blue-600/[0.10]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-400/[0.06] blur-[140px] dark:bg-indigo-600/[0.10]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 dark:bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] dark:opacity-20" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 dark:border-blue-400/20 dark:bg-blue-500/[0.08]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 dark:bg-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300 md:text-xs">
              Trusted by ambitious businesses
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-[54px]">
            Businesses that trust us
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-blue-400">
              with their growth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-lg md:leading-8">
            From local businesses to growing institutions, we partner with ambitious owners to turn marketing into measurable growth.
          </p>
        </div>

        {/* Industries */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-white/[0.10] dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-200 md:text-sm"
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Client carousel */}
        <div className="relative mt-16 md:mt-20">
          <div className="nd-marquee relative overflow-hidden py-6">

            {/* Side fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent dark:from-[#080f1e] md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent dark:from-[#080f1e] md:w-32" />

            <div className="nd-marquee-track flex w-max items-center gap-5 px-3 md:gap-7">
              {loop.map((c, i) => (
                <Card key={`${c.name}-${i}`} c={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-500 md:text-sm">
            Different industries. One focus: measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
