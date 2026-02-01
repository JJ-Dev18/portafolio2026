"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { certificatesByLocale } from "@/config/certificates";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Certificates() {
  const params = useParams();
  const lang = (params.lang as Locale) ?? "es";
  const t = useTranslations("certificates");

  const certificates = certificatesByLocale[lang] ?? [];

  return (
    <section id="certificates" className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {certificates.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-xl border border-border/50 bg-background/60 backdrop-blur-md p-8 text-center text-muted-foreground dark:bg-background/40 dark:border-border/30">
            {t("emptyState")}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, idx) => (
              <motion.article
                key={`${cert.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/60 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/60 dark:bg-background/40 dark:border-border/30 dark:hover:border-primary/70 dark:hover:shadow-primary/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-primary/20 dark:via-primary/10" />

                <div className="relative flex items-start gap-4">
                  <div className="mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-8 w-8" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : null}
                    </p>

                    {cert.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    {cert.credentialUrl ? (
                      <a
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "mt-6 w-full justify-center"
                        )}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("viewCredential")}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

