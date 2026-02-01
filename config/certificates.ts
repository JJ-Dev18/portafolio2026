import type { Locale } from "@/i18n/config";

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  tags?: string[];
};

/**
 * Edita este archivo para agregar tus certificados reales.
 * La sección soporta un estado vacío si no hay items.
 */
export const certificatesByLocale: Record<Locale, Certificate[]> = {
  es: [],
  en: [],
};

