import { allPosts } from "contentlayer/generated";
import { Header } from "@/components/sections/header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { compareDesc, format } from "date-fns";
import { es } from "date-fns/locale";

export const metadata = {
  title: "Blog | Juan Murillo",
  description: "Artículos sobre desarrollo web, DevOps, arquitectura y más.",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
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
                Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                Comparto mis experiencias, aprendizajes y reflexiones sobre desarrollo web,
                DevOps y tecnología.
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
                        {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
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
                    <Button asChild variant="ghost">
                      <Link href={post.url}>
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4 py-16">
                <p className="text-lg text-muted-foreground">
                  No hay posts disponibles en este momento.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
