type Props = {
  label?: string;
  title: string;
  children: React.ReactNode;
};

export default function Card({ label, title, children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_8px_30px_rgba(10,26,63,0.08)]">
      <div className="bg-orange-gradient h-1.5" />
      <div className="p-6">
        {label && <p className="font-mono text-xs text-muted">{label}</p>}
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}