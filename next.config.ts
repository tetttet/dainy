import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /*lh3.googleusercontent.com */
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default withNextIntl(nextConfig);
