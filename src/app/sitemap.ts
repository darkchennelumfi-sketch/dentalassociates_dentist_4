import type { MetadataRoute } from "next";

const baseUrl = "https://www.dentalassociatesmandan.com";

const routes = [
  { path: "", priority: 1 },
  { path: "/about-us", priority: 0.8 },
  { path: "/dental-services", priority: 0.9 },
  { path: "/contact-us", priority: 0.9 },
  { path: "/payment-options", priority: 0.6 },
];

const lastModified = new Date("2026-11-06T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.path === "" ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
