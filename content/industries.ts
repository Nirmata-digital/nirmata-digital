export type Industry = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  challenges: string[];
  services: string[]; // slugs from content/services.ts
};

export const industries: Industry[] = [
  {
    slug: "restaurant",
    name: "Restaurant",
    short: "Be found, chosen and visited by nearby diners.",
    intro: "Diners choose in seconds. We help your restaurant show up on Google and look good on social media.",
    challenges: ["An incomplete Google listing", "Inconsistent photos and posts", "No way to tell what brings people in"],
    services: ["seo-local-seo", "posters-social-creatives", "reels-short-videos", "business-websites"],
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    short: "Fill seats and sell tickets with clear promotion.",
    intro: "Events and venues depend on timing. We help you promote clearly and track what sells.",
    challenges: ["Short promotion windows", "Ads with no tracking", "Hard-to-find booking details"],
    services: ["meta-google-ads", "landing-pages", "reels-short-videos", "analytics-tracking"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "Make timings, services and booking easy to find.",
    intro: "Patients look for clear information first. We build simple, trustworthy sites and listings.",
    challenges: ["Repeated questions at the front desk", "Hard-to-find timings and services", "Missed calls and slow replies"],
    services: ["business-websites", "seo-local-seo", "whatsapp-follow-up", "analytics-tracking"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    short: "Present your products and win business enquiries.",
    intro: "Buyers want clear products and easy contact. We help you present your range professionally.",
    challenges: ["Uneven product photos", "An outdated website", "Enquiries scattered across calls and chats"],
    services: ["photography-brand-kits", "business-websites", "crm-lead-routing", "seo-local-seo"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Turn project ads into tracked, real enquiries.",
    intro: "Property marketing costs money. We help you see which ads bring real enquiries.",
    challenges: ["Ad spend with unclear results", "Slow follow-up on leads", "Projects without a focused page"],
    services: ["meta-google-ads", "landing-pages", "crm-lead-routing", "whatsapp-follow-up"],
  },
  {
    slug: "education",
    name: "Education",
    short: "Reply to every enquiry and keep admissions organised.",
    intro: "Parents and students ask many questions. We help you answer fast and follow up properly.",
    challenges: ["Enquiries waiting hours for a reply", "Leads never followed up", "No view of which channel brings admissions"],
    services: ["whatsapp-follow-up", "crm-lead-routing", "landing-pages", "meta-google-ads"],
  },
];