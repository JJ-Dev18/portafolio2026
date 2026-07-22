import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

function getLocale(request: NextRequest): string {
  // Check accept-language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Simple language detection from accept-language header
    if (acceptLanguage.includes('en')) return 'en';
    if (acceptLanguage.includes('es')) return 'es';
  }
  
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, _vercel, static files)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
