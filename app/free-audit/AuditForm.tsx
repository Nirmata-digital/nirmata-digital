"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const businessTypes = ["Clinic or healthcare", "Real estate", "Boutique or retail", "Education", "Export or trade", "Services or consulting", "Other"];
const goals = ["Get more enquiries", "A new or better website", "Run ads", "Content and social media", "Automation or AI", "Not sure yet"];

type Fields = { name: string; phone: string; email: string; business: string; link: string; type: string; goal: string; note: string; website2: string };
const empty: Fields = { name: "", phone: "", email: "", business: "", link: "", type: "", goal: "", note: "", website2: "" };

const input =
  "w-full rounded-xl border border-line bg-page px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-orange focus:ring-2 focus:ring-orange/25";

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-heading">
        {label} {required && <span className="text-orange" aria-hidden>*</span>}
      </span>
      <span className="mt-1.5 block">{children}</span>
      {error && <span role="alert" className="mt-1 block text-xs font-medium text-error">{error}</span>}
    </label>
  );
}

export default function AuditForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const message = () => {
    const lines = [
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      f.email ? `Email: ${f.email}` : "",
      `Business: ${f.business}`,
      f.link ? `Website or Instagram: ${f.link}` : "",
      f.type ? `Type: ${f.type}` : "",
      f.goal ? `Main goal: ${f.goal}` : "",
      f.note ? `Notes: ${f.note}` : "",
    ].filter(Boolean);
    return ["Hi, I would like a free digital audit.", "", ...lines].join("\n");
  };

  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a phone number with at least 10 digits.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "That email does not look right.";
    if (f.business.trim().length < 2) e.business = "Please enter your business name.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (f.website2) return; // spam trap: real visitors never fill this
    if (!validate()) return;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-card p-8 text-center shadow-soft md:p-10" role="status">
        <span className="bg-orange-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-full text-navy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <h2 className="mt-5 text-2xl font-semibold">Almost done, {f.name.split(" ")[0]}.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          WhatsApp has opened with your details filled in. Press send there and we will reply within a few hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-gradient rounded-full px-6 py-3 font-semibold text-navy"
          >
            Open WhatsApp again
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Free audit request")}&body=${encodeURIComponent(message())}`}
            className="rounded-full border border-line px-6 py-3 font-semibold text-heading hover:border-heading"
          >
            Send by email instead
          </a>
        </div>
        <button type="button" onClick={() => { setSent(false); setF(empty); }} className="mt-6 text-xs text-muted underline">
          Fill the form again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-soft md:p-9">
      <h2 className="text-2xl font-semibold">Request your free audit</h2>
      <p className="mt-2 text-sm text-muted">Takes about two minutes. No payment and no obligation.</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={errors.name}>
          <input className={input} value={f.name} onChange={set("name")} autoComplete="name" placeholder="Rahul Patil" aria-invalid={!!errors.name} />
        </Field>
        <Field label="WhatsApp number" required error={errors.phone}>
          <input className={input} value={f.phone} onChange={set("phone")} autoComplete="tel" inputMode="tel" placeholder="98765 43210" aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input className={input} type="email" value={f.email} onChange={set("email")} autoComplete="email" placeholder="you@business.com" aria-invalid={!!errors.email} />
        </Field>
        <Field label="Business name" required error={errors.business}>
          <input className={input} value={f.business} onChange={set("business")} autoComplete="organization" placeholder="Your business" aria-invalid={!!errors.business} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Website or Instagram link">
            <input className={input} value={f.link} onChange={set("link")} placeholder="https://" inputMode="url" />
          </Field>
        </div>
        <Field label="Type of business">
          <select className={input} value={f.type} onChange={set("type")}>
            <option value="">Select one</option>
            {businessTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="What do you want most?">
          <select className={input} value={f.goal} onChange={set("goal")}>
            <option value="">Select one</option>
            {goals.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything we should know?">
            <textarea className={`${input} min-h-[96px] resize-y`} value={f.note} onChange={set("note")} placeholder="For example: we get calls but few become customers." />
          </Field>
        </div>
      </div>

      {/* spam trap */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Leave this empty<input tabIndex={-1} autoComplete="off" value={f.website2} onChange={set("website2")} /></label>
      </div>

      <button
        type="submit"
        className="bg-orange-gradient mt-7 w-full rounded-full px-7 py-4 text-sm font-semibold text-navy shadow-[0_12px_32px_rgba(255,122,26,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,122,26,0.5)]"
      >
        Send my details on WhatsApp
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
        Your details are only used to prepare your audit and reply to you.
      </p>
    </form>
  );
}