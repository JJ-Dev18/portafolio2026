import { getPage } from "@/lib/pages";
import { MDXContent } from "@/components/mdx-content";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const page = getPage("experience", lang);
  return { title: page.title, description: page.description };
}

export default async function ExperiencePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const page = getPage("experience", lang);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">{page.title}</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXContent code={page.body.code} />
      </div>
    </article>
  );
}
