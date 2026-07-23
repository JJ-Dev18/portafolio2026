"use client";

import { Button } from "@/components/ui/button";
import { StatBar, type Stat } from "@/components/ui/stat-tile";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

export function Hero() {
  const params = useParams();
  const lang = params.lang as string;
  const t = useTranslations("home");
  const stats = t.raw("stats") as Stat[];

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 flex flex-col gap-6">
        <p className="font-mono text-sm text-muted-foreground">{t("greeting")} {t("name")}</p>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {t("tagline")}
          </h1>
          <p className="max-w-[60ch] text-xl">{t("subtitle")}</p>
          <p className="max-w-[60ch] text-lg text-muted-foreground">{t("focus")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <Link href={`/${lang}/uft`}>{t("ctaUft")}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`/${lang}/engineering`}>{t("ctaEngineering")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={siteConfig.links.email} aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <StatBar stats={stats} className="max-w-4xl mx-auto px-4" />
    </section>
  );
}
