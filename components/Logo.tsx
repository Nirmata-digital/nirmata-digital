"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

/* Put your logo file at /public/logo.png (or .svg) and change `src` if needed.
   If the file is missing, a monogram badge is shown instead.
   Use showName={false} if your logo image already contains the business name. */
export default function Logo({
  tone = "dark",
  boxed = false,
  showName = false,
  size = "md",
  mark = false,
  src,
  className = "",
}: {
  tone?: "dark" | "light";
  boxed?: boolean;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  mark?: boolean; // show only the N symbol (/public/logo-mark.png)
  src?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const file = src ?? (mark ? "/logo-mark.png" : "/logo.png");
  const h = { sm: "h-12", md: "h-14", lg: "h-20" }[size];

  const badge = failed ? (
    <span className="bg-orange-gradient flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-navy shadow-md">
      {site.name.charAt(0)}
    </span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={file} alt={`${site.name} logo`} onError={() => setFailed(true)} className={`${h} w-auto object-contain`} />
  );

  return (
    <Link href="/" aria-label={`${site.name} home`} className={`group inline-flex items-center gap-3 ${className}`}>
      <span className={boxed && !failed ? "rounded-xl bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition group-hover:-translate-y-0.5" : "transition group-hover:scale-105"}>
        {badge}
      </span>
      {showName && (
        <span className={`font-heading text-xl font-semibold tracking-tight ${tone === "light" ? "text-white" : "text-heading"}`}>
          {site.name}
        </span>
      )}
    </Link>
  );
}