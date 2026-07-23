"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Checklist } from "@/components/ui/checklist";

export function ArchitecturePanel() {
  const params = useParams();
  const lang = params.lang as string;
  const t = useTranslations("architecturePanel");
  const items = t.raw("items") as string[];

  return (
    <section className="w-full border-t">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <div className="rounded-lg border p-6 md:p-8">
          <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{t("modules")}</p>
          <Checklist items={items} className="mt-6" />
          <Link
            href={`/${lang}/engineering`}
            className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
