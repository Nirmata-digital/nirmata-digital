export default function SoftBackground({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className={`soft-bg ${flip ? "soft-bg-flip" : ""} pointer-events-none absolute inset-0 overflow-hidden`}>
      <span className="soft-hairline" />
      <span className="soft-dots" />
      <span className="soft-blob soft-blob-a" />
      <span className="soft-blob soft-blob-b" />
      <span className="soft-ring" />
    </div>
  );
}