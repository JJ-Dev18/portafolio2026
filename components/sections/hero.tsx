"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

export function Hero() {
  const params = useParams();
  const lang = params.lang as string;
  const t = useTranslations("hero");

  return (
    <section className="w-full flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 py-16 md:py-24 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center mx-auto">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
          {t("greeting")}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
            {t("name")}
          </span>
        </h1>
        <h2 className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl md:text-3xl">
          {t("role")}
        </h2>
        <p className="max-w-[700px] text-base text-muted-foreground sm:text-lg md:text-xl">
          {t("description")}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link 
          href={`/${lang}/projects`}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 dark:from-blue-500 dark:to-cyan-400 dark:hover:shadow-cyan-500/50"
        >
          <span className="relative z-10">{t("cta_projects")}</span>
          <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-600 dark:to-cyan-500" />
        </Link>
        <Button variant="outline" size="lg" asChild>
          <Link href={`/${lang}/contact`}>{t("cta_contact")}</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.email}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
