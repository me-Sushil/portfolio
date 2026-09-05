import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sushilbishowkarma.com";
  const routes = [
    "",
    "/about",
    "/experience",
    "/work",
    "/collection",
    "/writing",
    "/contact",
    "/millionaire",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
