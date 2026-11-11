
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFFFF] transition-all duration-500 ${
        exiting
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF7A1A] shadow-[0_8px_30px_rgba(255,122,26,0.2)]">
        <span className="text-4xl font-bold text-[#08152B]">
          N
        </span>
      </div>

      {/* Brand */}
      <h2 className="text-2xl font-bold tracking-[0.15em] text-[#08152B]">
        NIRMATA DIGITAL
      </h2>

      <p className="mt-3 text-[10px] tracking-[0.3em] text-[#64748B]">
        WE BUILD. WE GROW. WE MEASURE.
      </p>

      {/* Animated progress */}
      <div className="mt-10 h-[3px] w-48 overflow-hidden rounded-full bg-[#E8EAF0]">
        <div className="h-full w-full origin-left animate-loader rounded-full bg-[#FF7A1A]" />
      </div>

      <p className="mt-4 text-[10px] tracking-[0.25em] text-[#FF7A1A]">
        PREPARING YOUR EXPERIENCE...
      </p>

      <style jsx>{`
        @keyframes loader {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .animate-loader {
          animation: loader 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
