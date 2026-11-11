"use client";

import { useEffect, useRef } from "react";

export default function HoverEffects() {
  const core = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const coreEl = core.current!;
    const glowEl = glow.current!;
    const layers = Array.from(document.querySelectorAll<HTMLElement>(".ambient, .soft-bg"));

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let gx = mx, gy = my;
    let px = 0, py = 0;
    let raf = 0;
    let magnet: HTMLElement | null = null;

    const tick = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      const tpx = (mx / window.innerWidth - 0.5) * 2;
      const tpy = (my / window.innerHeight - 0.5) * 2;
      px += (tpx - px) * 0.06;
      py += (tpy - py) * 0.06;

      coreEl.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      glowEl.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      layers.forEach((l) => {
        l.style.setProperty("--px", px.toFixed(3));
        l.style.setProperty("--py", py.toFixed(3));
      });

      const settled =
        Math.abs(mx - gx) < 0.1 && Math.abs(my - gy) < 0.1 &&
        Math.abs(tpx - px) < 0.001 && Math.abs(tpy - py) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const resetMagnet = () => {
      if (magnet) { magnet.style.translate = ""; magnet = null; }
    };

    const move = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      coreEl.classList.add("cursor-on");
      glowEl.classList.add("cursor-on");
      if (!raf) raf = requestAnimationFrame(tick);

      const t = e.target as HTMLElement | null;

      const card = t?.closest<HTMLElement>(".spot-card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - r.left}px`);
        card.style.setProperty("--y", `${e.clientY - r.top}px`);
      }

      const m = t?.closest<HTMLElement>(".magnetic") ?? null;
      if (magnet && magnet !== m) resetMagnet();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        m.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
      }
    };

    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      glowEl.classList.toggle("is-link", !!t?.closest("a, button, [role='button']"));
      glowEl.classList.toggle("on-dark", !!t?.closest(".bg-navy-gradient, .gradient-border"));
    };

    const leave = () => {
      coreEl.classList.remove("cursor-on");
      glowEl.classList.remove("cursor-on");
      resetMagnet();
    };

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glow} aria-hidden className="cursor-glow" />
      <div ref={core} aria-hidden className="cursor-core" />
    </>
  );
}