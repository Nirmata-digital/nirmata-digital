type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "Naman Waterproofing", logo: "/clients/naman-waterproofing.png" },
  { name: "Waghmare's Ayurvedic Acupressure Acupuncture Center", logo: "/clients/waghmares.png" },
  { name: "Paulwat Foundation, Vasai", logo: "/clients/paulwat-foundation.png" },
  { name: "St. Mary High School, Virar", logo: "/clients/st-mary-high-school.png" },
  { name: "ShreeChem kadi", logo: "/clients/shree-chem.png" },
  { name: "Shreeji Infraventure", logo: "/clients/shreeji-infraventure.png" },
  { name: "Vidyavardhini College", logo: "/clients/vidyavardhini.png" },
  { name: "Naikee Engineering", logo: "/clients/naikee-engineering.png" },
];

const industries = ["Healthcare", "Real estate", "Education", "Engineering and chemicals", "Services and NGOs"];

function Card({ c }: { c: Client }) {
  return (
    <div className="flex w-52 shrink-0 flex-col items-center gap-3 px-6 py-5">
      {c.logo ? (
        <div className="flex h-20 w-32 items-center justify-center rounded-xl bg-white p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.logo} alt={c.name} className="h-full w-full object-contain" />
        </div>
      ) : (
        <span className="bg-navy-gradient flex h-12 w-12 items-center justify-center rounded-xl font-semibold text-white">
          {c.name.charAt(0)}
        </span>
      )}
      <span className="line-clamp-2 text-center text-xs font-semibold text-muted">{c.name}</span>
    </div>
  );
}

export default function ClientsCarousel() {
  const loop = [...clients, ...clients];
  return (
    <section className="force-dark bg-page">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">Businesses that trust us with their growth</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">From local clinics to overseas brands, we work with owners who want to see what their marketing earns.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted">{i}</span>
            ))}
          </div>
        </div>

        <div className="nd-marquee relative mt-10 overflow-hidden rounded-3xl border border-line bg-card shadow-[0_8px_30px_rgba(10,26,63,0.06)] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="nd-marquee-track">
            {loop.map((c, i) => <Card key={i} c={c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}