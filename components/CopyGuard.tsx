"use client";

import { useEffect } from "react";

/* Light copy deterrent. It stops casual copying only (right-click, copy, image drag).
   Forms, phone and email links, and anything with the "allow-copy" class still work. */
const ALLOWED = "input, textarea, select, [contenteditable], .allow-copy, a[href^='tel:'], a[href^='mailto:']";

function isAllowed(target: EventTarget | null) {
  return target instanceof Element && !!target.closest(ALLOWED);
}

export default function CopyGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      if (!isAllowed(e.target)) e.preventDefault();
    };
    const events = ["contextmenu", "copy", "cut", "dragstart"];
    events.forEach((ev) => document.addEventListener(ev, block));
    return () => events.forEach((ev) => document.removeEventListener(ev, block));
  }, []);

  return null;
}
