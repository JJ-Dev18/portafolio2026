import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/components/mdx-content";
import { getTranslations } from "next-intl/server";

function getUft(lang: string) {
  const project = allProjects.find((p) => p.slug === "uft" && p.locale === lang);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const project = getUft(lang);
  return {
    title: project.title,
    description: project.description,
    keywords: project.tags,
    alternates: {
      canonical: `/${lang}/uft`,
      languages: { en: "/en/uft", es: "/es/uft", "x-default": "/en/uft" },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `/${lang}/uft`,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function UftPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const project = getUft(lang);
  const t = await getTranslations({ locale: lang, namespace: "projects" });

  return (
    <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <header className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {project.projectUrl && (
          <div className="pt-2">
            <Button asChild>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                {t("visitSite")}
              </a>
            </Button>
          </div>
        )}
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXContent code={project.body.code} />
      </div>
    </article>
  );
}
