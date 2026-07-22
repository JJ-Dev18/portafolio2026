import { allPages } from "contentlayer/generated";
import { notFound } from "next/navigation";

export function getPage(slug: string, locale: string) {
  const page = allPages.find((p) => p.slug === slug && p.locale === locale);
  if (!page) notFound();
  return page;
}
