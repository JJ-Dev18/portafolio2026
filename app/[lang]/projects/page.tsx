import { allProjects } from "contentlayer/generated";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { compareDesc } from "date-fns";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "projects" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "projects" });
  const projects = allProjects
    .filter((project) => project.published && project.locale === lang && !project.featured)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project._id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button asChild className="w-full gap-2">
                  <Link href={project.url}>
                    {t("viewProject")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                {project.projectUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      {t("visitSite")}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 py-16">
            <p className="text-lg text-muted-foreground">{t("emptyState")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
