import type { Kind } from "@/content/work";

export default function CaseVisual({
  kind,
  sample = false,
  tall = false,
}: {
  kind: Kind;
  sample?: boolean;
  tall?: boolean;
}) {
  return (
    <div
      className={`bg-navy-gradient relative flex items-center justify-center overflow-hidden p-6 ${
        tall ? "h-64 md:h-80" : "h-48"
      }`}
    >
      {kind === "web" && (
        <div className="w-full max-w-[260px] rounded-lg bg-white/10 p-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="mt-3 h-3 w-2/3 rounded bg-white/50" />
          <div className="mt-2 h-2 w-full rounded bg-white/25" />
          <div className="mt-1.5 h-2 w-5/6 rounded bg-white/25" />
          <div className="bg-orange-gradient mt-4 h-6 w-24 rounded-full" />
        </div>
      )}

      {kind === "content" && (
        <div className="flex items-end gap-3">
          {["h-28", "h-36", "h-24"].map((h, i) => (
            <div key={h} className={`${h} w-16 rounded-lg ${i === 1 ? "bg-orange-gradient" : "bg-white/20"}`} />
          ))}
        </div>
      )}

      {kind === "growth" && (
        <div className="flex h-28 w-full max-w-[260px] items-end gap-2">
          {[30, 45, 40, 62, 55, 78, 92].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-md ${i === 6 ? "bg-orange-gradient" : "bg-white/25"}`}
            />
          ))}
        </div>
      )}

      {kind === "automation" && (
        <div className="flex w-full max-w-[280px] items-center">
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white/20" />
          <div className="h-0.5 flex-1 bg-white/30" />
          <div className="bg-orange-gradient h-12 w-12 shrink-0 rounded-xl" />
          <div className="h-0.5 flex-1 bg-white/30" />
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white/20" />
        </div>
      )}

      {sample && (
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] text-white">
          SAMPLE PROJECT
        </span>
      )}
    </div>
  );
}