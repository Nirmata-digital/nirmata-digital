import { site } from "@/lib/site";

export default function CallButton() {
  return (
    <a
      href={`tel:${site.phoneLink}`}
      aria-label="Call us"
      className="fixed bottom-4 left-4 z-50 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg md:hidden"
    >
      Call
    </a>
  );
}