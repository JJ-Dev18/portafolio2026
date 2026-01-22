import { allPosts } from "contentlayer/generated";
import { Header } from "@/components/sections/header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { compareDesc, format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "blog" });
  return {
    title: `${t("title")} | Juan Murillo`,
    description: t("description"),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "blog" });
  const locale = lang === "es" ? es : enUS;
  const posts = allPosts
    .filter((post) => post.published && post.locale === lang)
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

            {/* Posts List */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
              {posts.map((post) => (
                <Card key={post._id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), lang === "es" ? "d 'de' MMMM, yyyy" : "MMMM d, yyyy", { locale })}
                      </time>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      href={post.url}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {t("readMore")}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full dark:bg-blue-400" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
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
