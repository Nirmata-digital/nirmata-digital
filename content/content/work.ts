export type Pillar = "Growth" | "Web" | "Content" | "Automation and Apps";
export type Kind = "web" | "content" | "growth" | "automation";

export type CaseStudy = {
  slug: string;
  pillar: Pillar;
  kind: Kind;
  industry: string;
  title: string;
  summary: string;
  problem: string;
  whatWeDid: string[];
  result: string;
  isSample: boolean; // set to false when this is a real client project
};

export const pillarFilters: ("All" | Pillar)[] = [
  "All",
  "Growth",
  "Web",
  "Content",
  "Automation and Apps",
];

// These are SAMPLE projects that show the format. Replace each one with a real
// case study (and set isSample to false) as you finish client work.
// Never add a result you cannot prove.
export const caseStudies: CaseStudy[] = [
  {
    slug: "clinic-website",
    pillar: "Web",
    kind: "web",
    industry: "Healthcare",
    title: "Clinic website",
    summary: "A mobile-first website that makes timings, services and booking easy to find.",
    problem:
      "Example problem: patients could not quickly find timings, services or a way to book, so the front desk answered the same questions all day.",
    whatWeDid: [
      "Planned the pages around the questions patients ask most",
      "Designed a mobile-first layout with call and WhatsApp buttons",
      "Set up tracking for calls, forms and button clicks",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
  {
    slug: "restaurant-google-listing",
    pillar: "Growth",
    kind: "growth",
    industry: "Restaurant",
    title: "Restaurant Google listing",
    summary: "A cleaner Google Business Profile that helps nearby customers find and choose you.",
    problem:
      "Example problem: the restaurant's listing had missing details and few photos, so nearby diners chose competitors.",
    whatWeDid: [
      "Completed and corrected the business details",
      "Added a consistent set of photos, menu and posts",
      "Set up tracking for calls and direction requests",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
  {
    slug: "boutique-launch-creatives",
    pillar: "Content",
    kind: "content",
    industry: "Fashion retail",
    title: "Boutique launch creatives",
    summary: "A consistent set of posters and reels for a new collection.",
    problem:
      "Example problem: posts looked different every time and did not make the offer clear.",
    whatWeDid: [
      "Defined one simple look and offer for the launch",
      "Designed posters and edited short reels in that style",
      "Delivered files named and sized for each platform",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
  {
    slug: "real-estate-lead-campaign",
    pillar: "Growth",
    kind: "growth",
    industry: "Real estate",
    title: "Real estate lead campaign",
    summary: "A tracked ad campaign that shows which ads bring real enquiries.",
    problem:
      "Example problem: money was spent on ads, but nobody could tell which ones brought real enquiries.",
    whatWeDid: [
      "Built a focused landing page for the project",
      "Set up conversion tracking for calls and forms",
      "Reviewed results monthly and adjusted the ads",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
  {
    slug: "education-enquiry-follow-up",
    pillar: "Automation and Apps",
    kind: "automation",
    industry: "Education",
    title: "Enquiry follow-up flow",
    summary: "WhatsApp replies and a simple CRM so no enquiry is forgotten.",
    problem:
      "Example problem: new enquiries waited hours for a reply, and some were never followed up.",
    whatWeDid: [
      "Mapped how enquiries arrive and who handles them",
      "Set up automatic first replies and reminders on WhatsApp",
      "Collected every lead in one simple CRM view",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
  {
    slug: "manufacturer-product-photography",
    pillar: "Content",
    kind: "content",
    industry: "Manufacturing",
    title: "Product photography set",
    summary: "Clean, consistent product photos for a catalogue and website.",
    problem:
      "Example problem: product photos were taken on phones in different lighting, so the catalogue looked uneven.",
    whatWeDid: [
      "Planned a shot list and one consistent background",
      "Shot and edited every product the same way",
      "Delivered compressed files ready for the website and catalogue",
    ],
    result: "Result with a number goes here",
    isSample: true,
  },
];