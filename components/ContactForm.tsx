"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

const services = [
  "Growth (SEO, Google Business, ads)",
  "Web (website, landing pages, store)",
  "Content (social, video, design, photos)",
  "Automation and apps",
  "Free audit",
  "Not sure yet",
];

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const inputClass =
  "mt-2 w-full rounded-xl border border-line bg-page px-4 py-3 text-sm text-fg outline-none transition placeholder:text-muted/70 focus:border-heading focus:ring-2 focus:ring-orange/30";

export default function ContactForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  function read() {
    const fd = new FormData(formRef.current!);
    return {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""), // honeypot
    };
  }

  function validate(v: ReturnType<typeof read>) {
    const e: Errors = {};
    if (v.name.length < 2) e.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{8,}$/.test(v.phone)) e.phone = "Please enter a valid phone number.";
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email address.";
    if (v.message.length < 10) e.message = "Please tell us a little about what you need.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const v = read();
    const e = validate(v);
    setErrors(e);
    setServerError("");
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, source: "contact page" }),
      });
      if (res.ok) {
        router.push("/thank-you");
        return;
      }
      const data = await res.json().catch(() => ({}));
      setServerError(
        data?.error === "not_configured"
          ? "Our form is not connected yet. Please message us on WhatsApp or call us."
          : "Something went wrong. Please try again, or message us on WhatsApp."
      );
    } catch {
      setServerError("Could not send. Please check your connection, or message us on WhatsApp.");
    }
    setStatus("error");
  }

  function sendOnWhatsApp() {
    const v = read();
    const lines = [
      `Hi Nirmata Digital, I'm ${v.name || "(name)"}.`,
      v.service ? `I'm interested in: ${v.service}.` : "",
      v.message,
      v.phone ? `My number: ${v.phone}` : "",
    ].filter(Boolean);
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      {/* honeypot: real people never see or fill this */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-heading">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-error">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-heading">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-error">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-heading">
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-error">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-semibold text-heading">
            What do you need?
          </label>
          <select id="service" name="service" defaultValue={services[4]} className={inputClass}>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-heading">
          Tell us about your business and goal *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What do you do, what do you want to achieve, and is there a deadline? Add your website or Instagram link if you have one."
          className={inputClass}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-error">{errors.message}</p>
        )}
      </div>

      <div aria-live="polite">
        {serverError && (
          <p className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            {serverError}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={sending}
          className="bg-orange-gradient rounded-full px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message →"}
        </button>
        <button
          type="button"
          onClick={sendOnWhatsApp}
          className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-heading transition hover:border-heading"
        >
          Send on WhatsApp instead
        </button>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        By sending this form you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-heading">
          privacy policy
        </Link>
        . We use your details only to reply to your enquiry.
      </p>
    </form>
  );
}