"use client";

import { useEffect, useRef } from "react";

// Fixed values (no Math.random) so server and client render the same HTML.
const particles = [
  { l: 6, s: 3, d: 18, t: 0 }, { l: 14, s: 2, d: 24, t: 6 },
  { l: 22, s: 4, d: 20, t: 12 }, { l: 31, s: 2, d: 26, t: 3 },
  { l: 40, s: 3, d: 22, t: 9 }, { l: 49, s: 2, d: 28, t: 15 },
  { l: 57, s: 4, d: 19, t: 4 }, { l: 66, s: 2, d: 25, t: 11 },
  { l: 74, s: 3, d: 21, t: 1 }, { l: 82, s: 2, d: 27, t: 8 },
  { l: 90, s: 4, d: 23, t: 14 }, { l: 96, s: 2, d: 29, t: 5 },
];

export default function AmbientBackground({ variant = "light" }: { variant?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let x = 50, y = 40, tx = 50, ty = 40;

    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      if (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    parent.addEventListener("pointermove", move);
    return () => {
      parent.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`ambient ${variant === "dark" ? "ambient-dark" : ""} pointer-events-none absolute inset-0 overflow-hidden`}
    >
      <span className="ambient-aurora" />
      <span className="ambient-grid" />
      <span className="ambient-spotlight" />

      <span className="ambient-ring ambient-ring-a"><i /></span>
      <span className="ambient-ring ambient-ring-b"><i /></span>

      {particles.map((p, i) => (
        <span
          key={i}
          className="ambient-particle"
          style={{ left: `${p.l}%`, width: p.s, height: p.s, animationDuration: `${p.d}s`, animationDelay: `-${p.t}s` }}
        />
      ))}

      <span className="ambient-grain" />
    </div>
  );
}