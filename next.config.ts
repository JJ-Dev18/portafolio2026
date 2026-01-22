import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withContentlayer(withNextIntl(nextConfig));
