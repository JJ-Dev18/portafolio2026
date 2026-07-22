import { allCaseStudies } from "contentlayer/generated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "caseStudies" });
  return { title: t("title"), description: t("description") };
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "caseStudies" });
  const caseStudies = allCaseStudies
    .filter((cs) => cs.published && cs.locale === lang)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{t("title")}</h1>
        <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">{t("description")}</p>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {caseStudies.map((cs) => (
          <Link key={cs._id} href={cs.url}>
            <Card className="transition-colors hover:border-foreground/30">
              <CardHeader>
                <CardTitle>{cs.title}</CardTitle>
                <CardDescription>{cs.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {caseStudies.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">{t("emptyState")}</p>
      )}
    </section>
  );
}
