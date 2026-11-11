export default function AmbientBackground() {
  return (
    <div aria-hidden className="ambient pointer-events-none absolute inset-0 overflow-hidden">
      <span className="ambient-orb ambient-orb-a" />
      <span className="ambient-orb ambient-orb-b" />
      <span className="ambient-grid" />
      <span className="ambient-sweep" />
    </div>
  );
}