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

/* Uses Google's free website translator behind our own dropdown.
   The Google script loads only when a non-English language is chosen,
   so English visitors download nothing extra.

   If the switcher appears twice on a page (for example desktop header and mobile menu),
   keep loadTranslator on for ONE of them and pass loadTranslator={false} and a different id
   to the other. */
export default function LanguageSwitcher({
  className = "",
  id = "nd-lang",
  loadTranslator = true,
}: {
  className?: string;
  id?: string;
  loadTranslator?: boolean;
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

  return (
    <div translate="no" className={`notranslate ${className}`}>
      <label htmlFor={id} className="sr-only">Language</label>
      <select
        id={id}
        value={lang}
        onChange={(e) => chooseLang(e.target.value)}
        className="rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-fg outline-none transition hover:border-orange focus:border-orange"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
      {loadTranslator && <div id="google_translate_element" style={{ display: "none" }} />}
    </div>
  );
}