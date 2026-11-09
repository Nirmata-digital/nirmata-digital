import { clients } from "@/content/clients";

export default function ClientMarquee() {
  const real = clients.length > 0;
  const base = real
    ? clients
    : Array.from({ length: 8 }, (_, i) => ({ name: `Your logo ${i + 1}`, logo: undefined as string | undefined }));
  const loop = [...base, ...base];

  return (
    <section className="relative border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
          {real ? "Brands we work with" : "Your brand could be next"}
        </p>
        <div
          className="nd-marquee mt-8 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          }}
        >
          <div className="nd-marquee-track gap-6">
            {loop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex h-16 w-44 shrink-0 items-center justify-center rounded-2xl border border-line bg-page px-4 shadow-[0_6px_20px_rgba(10,26,63,0.06)]"
              >
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt={c.name} className="max-h-9 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
                ) : (
                  <span className="font-mono text-xs text-muted">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}