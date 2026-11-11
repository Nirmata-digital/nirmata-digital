"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

/* Put your logo file at /public/logo.png (or .svg) and change `src` if needed.
   If the file is missing, a monogram badge is shown instead.
   showName shows the premium NIRMATA / DIGITAL wordmark next to the image (use it with `mark`). */
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
    <Link href="/" aria-label={`${site.name} home`} className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap ${className}`}>
      <span className={boxed && !failed ? "rounded-xl bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition group-hover:-translate-y-0.5" : "transition group-hover:scale-105 dark:rounded-xl dark:bg-white dark:p-1.5"}>
        {badge}
      </span>
      {showName && (
        <span className="flex flex-col leading-none">
          <span className={`font-heading text-[19px] font-extrabold uppercase tracking-[0.16em] sm:text-[21px] ${tone === "light" ? "text-white" : "text-heading"}`}>
            {site.name.split(" ")[0]}
          </span>
          <span className="mt-1.5 flex items-center gap-2">
            <span className="h-px w-3.5 bg-orange" />
            <span className={`text-[10px] font-semibold uppercase tracking-[0.45em] ${tone === "light" ? "text-[#aab0ff]" : "text-[#4f46e5] dark:text-[#9aa0ff]"}`}>
              {site.name.split(" ").slice(1).join(" ") || "Digital"}
            </span>
            <span className="h-px w-3.5 bg-orange" />
          </span>
        </span>
      )}
    </Link>
  );
}