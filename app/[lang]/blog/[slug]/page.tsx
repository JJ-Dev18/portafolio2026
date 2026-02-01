import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { MDXContent } from "@/components/mdx-content";
import { getTranslations } from "next-intl/server";

interface PostPageProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
    lang: post.locale,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug, lang } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.locale === lang);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Juan Murillo`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        es: `/es/blog/${slug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/${lang}/blog/${slug}`,
      publishedTime: post.date,
      authors: ["Juan Murillo"],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug, lang } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.locale === lang);
  const t = await getTranslations({ locale: lang, namespace: "blog" });
  const locale = lang === "es" ? es : enUS;

  if (!post || !post.published) {
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
              <Link href={`/${lang}/blog`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("backToBlog")}
              </Link>
            </Button>
          </div>

          {/* Post Header */}
          <header className="mb-8 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), lang === "es" ? "d 'de' MMMM, yyyy" : "MMMM d, yyyy", { locale })}
                </time>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <MDXContent code={post.body.code} />
          </div>
        </article>
      </main>
    </>
  );
}
