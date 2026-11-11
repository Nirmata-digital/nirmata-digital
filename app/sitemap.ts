import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yourdomain.com";

type Freq = "weekly" | "monthly" | "yearly";

// Static pages. Only list pages that really exist in /app.
const staticRoutes: { path: string; priority: number; freq: Freq }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/services", priority: 0.9, freq: "monthly" },
  { path: "/packages", priority: 0.9, freq: "monthly" },
  { path: "/work", priority: 0.8, freq: "monthly" },
  { path: "/free-audit", priority: 0.9, freq: "monthly" },
  { path: "/about", priority: 0.6, freq: "yearly" },
  { path: "/contact", priority: 0.8, freq: "yearly" },
  { path: "/blog", priority: 0.7, freq: "weekly" },
  { path: "/careers", priority: 0.5, freq: "monthly" },
  { path: "/privacy", priority: 0.3, freq: "yearly" },
  { path: "/terms", priority: 0.3, freq: "yearly" },
  { path: "/cookies", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const fixed = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Built from your content files, so new services, industries and
  // case studies appear in the sitemap automatically.
  const dynamic = [
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.8 })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.slug}`, priority: 0.7 })),
    ...caseStudies.map((c) => ({ url: `${base}/work/${c.slug}`, priority: 0.7 })),
    // Blog posts: add the same pattern once you have a posts file,
    // e.g. ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, priority: 0.6 })),
  ].map((d) => ({
    url: d.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: d.priority,
  }));

  return [...fixed, ...dynamic];
}