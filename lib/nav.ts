import { industries } from "@/content/industries";
import { services, servicePillars } from "@/content/services";
import { caseStudies } from "@/content/work";

export type MenuLink = { label: string; href: string; text?: string };
export type MenuColumn = { title: string; items: MenuLink[] };
export type MenuItem = {
  label: string;
  href?: string;
  columns?: MenuColumn[];
  footer?: { label: string; href: string };
};

const industryLinks: MenuLink[] = industries.map((i) => ({
  label: i.name,
  href: `/industries/${i.slug}`,
  text: i.short,
}));

const workLinks: MenuLink[] = caseStudies.map((c) => ({
  label: c.title,
  href: `/work/${c.slug}`,
  text: `${c.pillar} · ${c.industry}`,
}));

export const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    columns: servicePillars.map((p) => ({
      title: p,
      items: services
        .filter((s) => s.pillar === p)
        .map((s) => ({ label: s.title, href: `/services/${s.slug}`, text: s.short })),
    })),
    footer: { label: "View all services", href: "/services" },
  },
  { label: "Packages", href: "/packages" },
  {
    label: "Work",
    href: "/work",
    columns: [
      { title: "Projects", items: workLinks.slice(0, 3) },
      { title: "More projects", items: workLinks.slice(3) },
    ],
    footer: { label: "View all work", href: "/work" },
  },
  {
    label: "Industries",
    columns: [
      { title: "Customer-facing", items: industryLinks.slice(0, 3) },
      { title: "Business and learning", items: industryLinks.slice(3) },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        title: "Company",
        items: [
          { label: "About us", href: "/about", text: "Who we are and how we work" },
          { label: "Contact", href: "/contact", text: "Call, WhatsApp or visit us" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Blog", href: "/blog", text: "Tips for getting more enquiries" },
          { label: "Free audit", href: "/free-audit", text: "Find out what to fix first" },
        ],
      },
    ],
  },
];

export type SearchItem = { label: string; href: string; group: string; text?: string };

export const searchIndex: SearchItem[] = [
  { label: "Home", href: "/", group: "Pages" },
  { label: "Services", href: "/services", group: "Pages" },
  { label: "Packages", href: "/packages", group: "Pages" },
  { label: "Work", href: "/work", group: "Pages" },
  { label: "About", href: "/about", group: "Pages" },
  { label: "Contact", href: "/contact", group: "Pages" },
  { label: "Blog", href: "/blog", group: "Pages" },
  { label: "Free audit", href: "/free-audit", group: "Pages" },
  { label: "Privacy", href: "/privacy", group: "Legal" },
  { label: "Terms", href: "/terms", group: "Legal" },
  { label: "Cookie Policy", href: "/cookies", group: "Legal" },
  ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}`, group: "Services", text: s.short })),
  ...industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}`, group: "Industries", text: i.short })),
  ...caseStudies.map((c) => ({ label: c.title, href: `/work/${c.slug}`, group: "Work", text: c.summary })),
];