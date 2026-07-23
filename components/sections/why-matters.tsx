"use client";

import { useTranslations } from "next-intl";

export function WhyMatters() {
  const t = useTranslations("whyMatters");

  return (
    <section className="w-full border-t">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-[65ch] text-xl leading-relaxed">{t("body")}</p>
      </div>
    </section>
  );
}
