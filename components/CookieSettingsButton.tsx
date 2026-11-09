"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="bg-orange-gradient rounded-full px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-105"
    >
      Change my cookie choice
    </button>
  );
}