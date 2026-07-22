"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;
  const t = useTranslations("navigation");

  const navigation = [
    { title: t("about"), href: `/${lang}/about` },
    { title: t("uft"), href: `/${lang}/uft` },
    { title: t("engineering"), href: `/${lang}/engineering` },
    { title: t("caseStudies"), href: `/${lang}/case-studies` },
    { title: t("experience"), href: `/${lang}/experience` },
    { title: t("skills"), href: `/${lang}/skills` },
    { title: t("learning"), href: `/${lang}/learning` },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${lang}`} className="font-mono text-base font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href={`/${lang}/contact`}>{t("contact")}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="mt-10 flex flex-col gap-1">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
                        isActive(item.href) ? "text-foreground bg-accent" : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href={`/${lang}/contact`}
                    className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-primary-foreground"
                  >
                    {t("contact")}
                  </Link>
                </SheetClose>
              </nav>
              <div className="mt-6 flex items-center gap-2 border-t pt-6 sm:hidden">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
