import type { MetadataRoute } from "next";

const SITE_URL = "https://northwinglabs.com";

const PUBLIC_ROUTES = [
  "",
  "/services",
  "/services/custom-software",
  "/services/ai-tools",
  "/services/business-automation",
  "/services/mobile-apps",
  "/services/saas-development",
  "/process",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
