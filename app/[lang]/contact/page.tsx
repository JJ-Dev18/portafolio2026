import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "contact" });

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("info.title")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{t("info.email")}</p>
                  <a
                    href={siteConfig.links.email}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {siteConfig.links.email.replace("mailto:", "")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{t("info.location")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("info.locationValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{t("info.availability")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("info.availabilityValue")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("social.title")}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start gap-3 h-auto py-3" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-medium">{t("social.github")}</span>
                    <span className="text-xs text-muted-foreground">
                      @{siteConfig.links.github.split("/").pop()}
                    </span>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="justify-start gap-3 h-auto py-3" asChild>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-medium">{t("social.linkedin")}</span>
                    <span className="text-xs text-muted-foreground">
                      @{siteConfig.links.linkedin.split("/").pop()}
                    </span>
                  </div>
                </a>
              </Button>

              <Button className="gap-2" asChild>
                <a href={siteConfig.links.email}>
                  <Mail className="h-4 w-4" />
                  {t("info.email")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
