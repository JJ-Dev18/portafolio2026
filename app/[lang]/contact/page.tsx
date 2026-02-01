"use client";

import { Header } from "@/components/sections/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí puedes integrar un servicio real como EmailJS, Resend, etc.)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert("¡Mensaje enviado! Te responderé pronto.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                {t("description")}
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("form.send")}</CardTitle>
                  <CardDescription>
                    {t("description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={t("form.namePlaceholder")}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t("form.emailPlaceholder")}
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t("form.message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder={t("form.messagePlaceholder")}
                        className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 dark:from-blue-500 dark:to-cyan-400 dark:hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <Mail className="h-4 w-4" />
                      {isSubmitting ? t("form.sending") : t("form.send")}
                    </button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {/* Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t("info.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{t("info.email")}</p>
                        <a
                          href={siteConfig.links.email}
                          className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {siteConfig.links.email.replace("mailto:", "")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{t("info.location")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("info.locationValue")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{t("info.availability")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("info.availabilityValue")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t("social.title")}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 group"
                    >
                      <Github className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium">{t("social.github")}</p>
                        <p className="text-xs text-muted-foreground">
                          @{siteConfig.links.github.split("/").pop()}
                        </p>
                      </div>
                    </a>

                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 group"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium">{t("social.linkedin")}</p>
                        <p className="text-xs text-muted-foreground">
                          @{siteConfig.links.linkedin.split("/").pop()}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
