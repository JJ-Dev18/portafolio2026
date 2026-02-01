import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { siteConfig } from "@/config/site";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const ogLocale = lang === "es" ? "es_ES" : "en_US";
  const alternateLocale = lang === "es" ? "en_US" : "es_ES";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Full-Stack Developer",
      "DevOps",
      "Portfolio",
    ],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      url: `/${lang}`,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Validate locale
  if (!isLocale(lang)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(lang);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages} locale={lang}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
