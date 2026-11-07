import { site } from "@/lib/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg"
    >
      WhatsApp
    </a>
  );
}