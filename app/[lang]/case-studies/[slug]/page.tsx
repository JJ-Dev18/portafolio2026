import { allCaseStudies } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXContent } from "@/components/mdx-content";
import { getTranslations } from "next-intl/server";

interface CaseStudyPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export async function generateStaticParams() {
  return allCaseStudies.map((cs) => ({ slug: cs.slug, lang: cs.locale }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug, lang } = await params;
  const cs = allCaseStudies.find((c) => c.slug === slug && c.locale === lang);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.description,
    keywords: cs.tags,
    alternates: {
      canonical: `/${lang}/case-studies/${slug}`,
      languages: {
        en: `/en/case-studies/${slug}`,
        es: `/es/case-studies/${slug}`,
        "x-default": `/en/case-studies/${slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug, lang } = await params;
  const cs = allCaseStudies.find((c) => c.slug === slug && c.locale === lang);
  const t = await getTranslations({ locale: lang, namespace: "caseStudies" });

  if (!cs || !cs.published) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href={`/${lang}/case-studies`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("backToCaseStudies")}
        </Link>
      </Button>

      <header className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{cs.title}</h1>
        <p className="text-xl text-muted-foreground">{cs.description}</p>
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXContent code={cs.body.code} />
      </div>
    </article>
  );
}
