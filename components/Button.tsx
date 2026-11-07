import Link from "next/link";

type Props = {
  href: string;
  variant?: "primary" | "dark" | "outline" | "outlineLight";
  children: React.ReactNode;
  className?: string;
};

const styles = {
  primary: "bg-orange-gradient text-navy hover:brightness-105",
  dark: "bg-navy text-white hover:bg-navy-mid",
  outline: "border border-navy/30 text-navy hover:border-navy",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

export default function Button({ href, variant = "primary", children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}