export const servicePillars = ["Growth", "Web", "Content", "Automation and Apps"] as const;
export type ServicePillar = (typeof servicePillars)[number];

export type Service = {
  slug: string;
  pillar: ServicePillar;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    slug: "meta-google-ads",
    pillar: "Growth",
    title: "Meta and Google Ads",
    short: "Ads set up to bring enquiries, with every click tracked.",
    intro:
      "We plan, launch and manage ads on Meta and Google, and connect them to tracking so you can see which ads bring calls and forms.",
    includes: [
      "Audience and keyword research",
      "Ad copy and creatives",
      "Conversion tracking for calls, forms and WhatsApp",
      "Monthly report with learnings and next steps",
    ],
    goodFor: "Businesses that want enquiries soon and are ready to test paid ads. Ad spend is paid directly to the platform.",
  },
  {
    slug: "seo-local-seo",
    pillar: "Growth",
    title: "SEO and Local SEO",
    short: "Help nearby customers find you on Google.",
    intro:
      "We improve your website and Google Business Profile so the right people can find you when they search. We never promise rankings, because nobody controls them.",
    includes: [
      "Google Business Profile setup and updates",
      "On-page SEO for your key pages",
      "Local keywords for the areas you serve",
      "Monthly progress notes in plain English",
    ],
    goodFor: "Local businesses and service providers who want steady, long-term visibility.",
  },
  {
    slug: "analytics-tracking",
    pillar: "Growth",
    title: "Analytics and Tracking",
    short: "Know which calls, forms and clicks come from where.",
    intro:
      "We set up tracking first, so every decision is based on real numbers instead of guesses.",
    includes: [
      "GA4 and Google Tag Manager setup",
      "Call, form and WhatsApp click tracking",
      "Meta Pixel and conversion events",
      "A simple report you can read at a glance",
    ],
    goodFor: "Anyone spending on marketing without a clear view of what it brings back.",
  },
  {
    slug: "business-websites",
    pillar: "Web",
    title: "Business Websites",
    short: "Fast, mobile-first websites that turn visitors into enquiries.",
    intro:
      "We design and build websites around the questions your customers ask, with clear calls to action and tracking built in.",
    includes: [
      "Mobile-first design tested on real phones",
      "Call, WhatsApp and contact form buttons",
      "Basic on-page SEO",
      "Tracking switched on at launch",
    ],
    goodFor: "New and growing businesses that need a proper website that works hard.",
  },
  {
    slug: "landing-pages",
    pillar: "Web",
    title: "Landing Pages",
    short: "Focused pages for one offer or campaign.",
    intro:
      "A landing page has one job: get the visitor to act. We build pages for ads, launches and offers, with tracking so you can see what works.",
    includes: [
      "One clear message and call to action",
      "Fast loading on mobile",
      "Form and WhatsApp lead capture",
      "Conversion tracking",
    ],
    goodFor: "Businesses running ads, launching a project or promoting a single offer.",
  },
  {
    slug: "web-apps-portals",
    pillar: "Web",
    title: "Web Apps and Portals",
    short: "Custom tools for your team or your customers.",
    intro:
      "When a website is not enough, we build web apps and portals such as booking tools, dashboards and customer areas.",
    includes: [
      "Planning around how your team works",
      "Login and role-based access where needed",
      "Clean, simple screens",
      "Handover and support after launch",
    ],
    goodFor: "Teams that need a tailored tool instead of a generic one.",
  },
  {
    slug: "reels-short-videos",
    pillar: "Content",
    title: "Reels and Short Videos",
    short: "Short videos made for Instagram, Facebook and YouTube.",
    intro:
      "We plan, shoot and edit short videos that show your product, people or process in a clear, consistent style.",
    includes: [
      "Idea and script planning",
      "Shooting and editing",
      "Captions and platform-ready sizes",
      "A steady monthly schedule",
    ],
    goodFor: "Brands that want regular video without managing a production team.",
  },
  {
    slug: "posters-social-creatives",
    pillar: "Content",
    title: "Posters and Social Creatives",
    short: "Posts that look consistent and make the offer clear.",
    intro:
      "We design posters and social posts in one recognisable style, so your brand looks the same everywhere.",
    includes: [
      "A simple look and feel for your posts",
      "Posters, carousels and story designs",
      "Files named and sized for each platform",
      "A monthly content plan",
    ],
    goodFor: "Businesses whose posts look different every time.",
  },
  {
    slug: "photography-brand-kits",
    pillar: "Content",
    title: "Photography and Brand Kits",
    short: "Clean photos and a one-page brand reference.",
    intro:
      "We direct and edit photography for products and spaces, and put your logo, colours and fonts on one reference sheet.",
    includes: [
      "Shot list and background planning",
      "Editing for consistent results",
      "Logo, colour and font sheet",
      "Templates for everyday posts",
    ],
    goodFor: "Manufacturers, shops and restaurants that need a catalogue or menu to look uniform.",
  },
  {
    slug: "whatsapp-follow-up",
    pillar: "Automation and Apps",
    title: "WhatsApp Follow-up Flows",
    short: "Fast replies and reminders so no enquiry is forgotten.",
    intro:
      "We set up automatic first replies and follow-ups on WhatsApp, so new enquiries hear back quickly.",
    includes: [
      "Mapping how enquiries arrive",
      "Automatic first replies",
      "Reminders for your team",
      "Testing before it goes live",
    ],
    goodFor: "Teams that lose enquiries because replies are slow.",
  },
  {
    slug: "crm-lead-routing",
    pillar: "Automation and Apps",
    title: "CRM Setup and Lead Routing",
    short: "Every lead in one place, sent to the right person.",
    intro:
      "We collect leads from your website, ads and WhatsApp into one simple CRM and route them to whoever handles them.",
    includes: [
      "CRM setup that fits your process",
      "Lead sources connected",
      "Assignment and reminder rules",
      "Short training for your team",
    ],
    goodFor: "Businesses keeping leads in notebooks, chats and spreadsheets.",
  },
  {
    slug: "dashboards-custom-tools",
    pillar: "Automation and Apps",
    title: "Dashboards and Custom Tools",
    short: "See your results at a glance.",
    intro:
      "We build reporting dashboards and small tools that save hours of repeat work and show what is working.",
    includes: [
      "Key numbers on one screen",
      "Data from ads, website and CRM",
      "Automatic monthly summaries",
      "Changes as your needs grow",
    ],
    goodFor: "Owners who want clear numbers without building reports by hand.",
  },
];