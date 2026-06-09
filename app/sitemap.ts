import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.95 },
    { path: "/case-studies", priority: 0.75 },
    { path: "/process", priority: 0.7 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/faq", priority: 0.85 },
    { path: "/contact", priority: 0.9 },
    { path: "/terms", priority: 0.35 },
    { path: "/privacy-policy", priority: 0.35 },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
