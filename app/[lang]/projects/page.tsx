import { allProjects } from "contentlayer/generated";
import { Header } from "@/components/sections/header";
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
    title: `${t("title")} | Juan Murillo`,
    description: t("description"),
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "projects" });
  const projects = allProjects
    .filter((project) => project.published && project.locale === lang)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                {t("description")}
              </p>
            </div>

            {/* Projects Grid */}
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
                  <CardFooter>
                    <Link 
                      href={project.url}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-600/30 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:shadow-blue-500/30"
                    >
                      {t("viewProject")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4 py-16">
                <p className="text-lg text-muted-foreground">
                  {t("emptyState")}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
