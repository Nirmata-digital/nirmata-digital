import Link from "next/link";
import { site } from "@/lib/site";

type Faq = { q: string; a: string };

function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />
    </svg>
  );
}

function HelpRow({
  label,
  display,
  tel,
  wa,
}: {
  label: string;
  display: string;
  tel: string;
  wa: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-soft p-4">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-heading">{label}</p>
        <a href={`tel:${tel}`} className="text-orange-gradient mt-1 inline-block text-base font-bold">
          {display}
        </a>
      </div>
      <div className="flex shrink-0 flex-col gap-2">
        <a
          href={`tel:${tel}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange/60 px-3 py-1.5 text-xs font-semibold text-orange transition hover:bg-orange/10"
        >
          <PhoneIcon /> Call now
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-95"
        >
          <ChatIcon /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function FaqWithHelp({
  faqs,
  title = "Frequently asked questions",
  subtitle = "Everything you need to know before you get started.",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
}) {
  const message = site.whatsappMessage;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Questions */}
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-line bg-card px-6 py-4 shadow-[0_4px_16px_rgba(10,26,63,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-heading [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soft text-orange transition group-open:rotate-45">
                  <svg className="h-4 w-4" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        {/* Help box */}
        <aside className="rounded-3xl border border-line bg-card p-6 shadow-[0_8px_30px_rgba(10,26,63,0.08)] lg:sticky lg:top-28">
          <div className="text-center">
            <span className="bg-orange-gradient mx-auto flex h-12 w-12 items-center justify-center rounded-full text-navy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden>
                <path d="M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 002 2h1v-5H6a2 2 0 00-2 2zm16 0a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2zM18 18a3 3 0 01-3 3h-2" />
              </svg>
            </span>
            <h3 className="mt-3 text-2xl font-semibold">
              Need <span className="text-orange-gradient">help?</span>
            </h3>
            <p className="mt-1 text-sm text-muted">{site.hours}</p>
          </div>

          <div className="mt-5 space-y-3">
            <HelpRow
              label="Call or message us"
              display={site.phoneDisplay}
              tel={site.phoneLink}
              wa={waLink(site.whatsapp, message)}
            />
            <HelpRow
              label="Second number"
              display={site.phone2Display}
              tel={site.phone2Link}
              wa={waLink(site.phone2Link.replace("+", ""), message)}
            />
          </div>

          <Link
            href="/contact"
            className="bg-orange-gradient mt-5 flex items-center justify-between gap-3 rounded-2xl p-4 text-navy transition hover:brightness-105"
          >
            <span>
              <span className="block text-base font-semibold">Get assistance</span>
              <span className="block text-xs text-navy/80">Our team is ready to help you</span>
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/30 text-lg" aria-hidden>
              →
            </span>
          </Link>
        </aside>
      </div>
    </section>
  );
}