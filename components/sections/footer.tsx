"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  const params = useParams();
  const lang = params.lang as string;
  const t = useTranslations("navigation");
  const tf = useTranslations("footer");

  const navigation = [
    { title: t("about"), href: `/${lang}/about` },
    { title: t("uft"), href: `/${lang}/uft` },
    { title: t("engineering"), href: `/${lang}/engineering` },
    { title: t("caseStudies"), href: `/${lang}/case-studies` },
    { title: t("experience"), href: `/${lang}/experience` },
    { title: t("skills"), href: `/${lang}/skills` },
    { title: t("learning"), href: `/${lang}/learning` },
    { title: t("contact"), href: `/${lang}/contact` },
  ];

  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-sm font-semibold">{siteConfig.name}</span>
          <p className="text-sm text-muted-foreground max-w-[28ch]">{tf("bio")}</p>
          <div className="flex items-center gap-1 -ml-2">
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

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">{tf("navigate")}</span>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">{tf("otherWork")}</span>
          <p className="text-sm text-muted-foreground max-w-[32ch]">{tf("otherWorkNote")}</p>
          <Link
            href={`/${lang}/projects`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            {tf("otherWorkLink")}
          </Link>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
