import type { MetadataRoute } from "next";
import { CITY_PAGES, SERVICE_PAGES, SITE_URL } from "@/lib/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = { url: SITE_URL, lastModified: now, changeFrequency: "weekly" as const, priority: 1 };
  const services = SERVICE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const cities = CITY_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [home, ...services, ...cities];
}
