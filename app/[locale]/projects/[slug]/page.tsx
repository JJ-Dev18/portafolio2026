import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { MDXContent } from "@/components/mdx-content";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Juan Murillo`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      publishedTime: project.date,
      authors: ["Juan Murillo"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="w-full">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a proyectos
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <header className="mb-8 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={project.date}>
                  {format(new Date(project.date), "d 'de' MMMM, yyyy", { locale: es })}
                </time>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Project Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <MDXContent code={project.body.code} />
          </div>
        </article>
      </main>
    </>
  );
}
