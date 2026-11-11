/* Replace the placeholder entries with real clients (written permission needed).
   Add a logo like { name: "Acme Clinic", logo: "/clients/acme.png" }. */
type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "Client name" }, { name: "Client name" }, { name: "Client name" },
  { name: "Client name" }, { name: "Client name" }, { name: "Client name" },
];

const industries = ["Clinics", "Real estate", "Boutiques and retail", "Education", "Export and trade"];

function Card({ c }: { c: Client }) {
  return (
    <div className="flex w-52 shrink-0 flex-col items-center gap-3 px-6 py-5">
      {c.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={c.logo} alt={c.name} className="h-12 w-auto object-contain" />
      ) : (
        <span className="bg-navy-gradient flex h-12 w-12 items-center justify-center rounded-xl font-semibold text-white">
          {c.name.charAt(0)}
        </span>
      )}
      <span className="text-center text-xs font-semibold text-muted">{c.name}</span>
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