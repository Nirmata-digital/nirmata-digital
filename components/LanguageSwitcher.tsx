"use client";

import { useEffect, useState } from "react";

/* Indian languages offered in the dropdown. Remove any line you do not want. */
const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "bn", label: "বাংলা" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "ur", label: "اردو" },
];

type GoogleTranslateWindow = Window & {
  google?: { translate?: { TranslateElement: new (options: object, elementId: string) => unknown } };
  googleTranslateInit?: () => void;
};

function readLang(): string {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
}

function chooseLang(code: string) {
  const host = location.hostname;
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  if (code === "en") {
    document.cookie = `googtrans=; ${expired}; path=/`;
    document.cookie = `googtrans=; ${expired}; path=/; domain=${host}`;
  } else {
    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; path=/; domain=${host}`;
  }
  location.reload();
}

/* Uses Google's free website translator behind our own control.
   The Google script loads only when a non-English language is chosen,
   so English visitors download nothing extra.

   variant="icon"   : a round globe button (same size as the theme toggle), for the header
   variant="select" : a normal dropdown, for the mobile menu

   If the switcher appears twice on a page, keep loadTranslator on for ONE of them and pass
   loadTranslator={false} and a different id to the other. */
export default function LanguageSwitcher({
  className = "",
  id = "nd-lang",
  loadTranslator = true,
  variant = "icon",
}: {
  className?: string;
  id?: string;
  loadTranslator?: boolean;
  variant?: "icon" | "select";
}) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const current = readLang();
    setLang(current);
    if (current === "en" || !loadTranslator) return;

    const w = window as GoogleTranslateWindow;
    w.googleTranslateInit = () => {
      if (!w.google?.translate) return;
      new w.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGS.filter((l) => l.code !== "en").map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("gt-script")) {
      const s = document.createElement("script");
      s.id = "gt-script";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [loadTranslator]);

  const options = LANGS.map((l) => (
    <option key={l.code} value={l.code}>{l.label}</option>
  ));
  const target = loadTranslator && <div id="google_translate_element" style={{ display: "none" }} />;

  if (variant === "select") {
    return (
      <div translate="no" className={`notranslate ${className}`}>
        <label htmlFor={id} className="sr-only">Language</label>
        <select
          id={id}
          value={lang}
          onChange={(e) => chooseLang(e.target.value)}
          className="rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-fg outline-none transition hover:border-orange focus:border-orange"
        >
          {options}
        </select>
        {target}
      </div>
    );
  }

  return (
    <div translate="no" className={`notranslate ${className}`}>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-card text-muted transition hover:border-heading hover:text-heading focus-within:border-orange">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        {lang !== "en" && (
          <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-orange ring-2 ring-white dark:ring-[#0f2250]" aria-hidden />
        )}
        <label htmlFor={id} className="sr-only">Language</label>
        <select
          id={id}
          value={lang}
          onChange={(e) => chooseLang(e.target.value)}
          title="Language"
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-full opacity-0"
        >
          {options}
        </select>
      </div>
      {target}
    </div>
  );
}