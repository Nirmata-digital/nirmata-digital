import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yourdomain.com";

// Add every public page here. When you create service pages, work case
// studies or blog posts, add their URLs too (or build the list from your data).
const routes: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/services", priority: 0.9, freq: "monthly" },
  { path: "/packages", priority: 0.9, freq: "monthly" },
  { path: "/work", priority: 0.8, freq: "monthly" },
  { path: "/free-audit", priority: 0.9, freq: "monthly" },
  { path: "/contact", priority: 0.8, freq: "yearly" },
  { path: "/careers", priority: 0.5, freq: "monthly" },
  // { path: "/about", priority: 0.6, freq: "yearly" },
  // { path: "/blog", priority: 0.7, freq: "weekly" },
  // { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
  // { path: "/terms", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
