import type { MetadataRoute } from "next";
import { allProjects, allCaseStudies } from "contentlayer/generated";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";

const staticRoutes = [
  "",
  "/about",
  "/uft",
  "/engineering",
  "/case-studies",
  "/experience",
  "/skills",
  "/learning",
  "/contact",
  "/projects",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({ url: `${siteConfig.url}/${locale}${route}` });
    }
    for (const project of allProjects.filter((p) => p.published && p.locale === locale)) {
      entries.push({ url: `${siteConfig.url}${project.url}`, lastModified: project.date });
    }
    for (const cs of allCaseStudies.filter((c) => c.published && c.locale === locale)) {
      entries.push({ url: `${siteConfig.url}${cs.url}`, lastModified: cs.date });
    }
  }

  return entries;
}
