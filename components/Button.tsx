import Link from "next/link";

type Props = {
  href: string;
  variant?: "primary" | "dark" | "outline";
  children: React.ReactNode;
  className?: string;
};

const styles = {
  primary: "bg-orange-gradient text-navy hover:brightness-105",
  dark: "bg-heading text-page hover:opacity-90",
  outline: "border border-line text-heading hover:border-heading",
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