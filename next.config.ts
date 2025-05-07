import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "vi"], // Languages supported
    defaultLocale: "en", // Default language
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ], // Domain mặc định của Contentful
  },
  env: {
    WEBFLOW_BASE_URL: "https://haos-dapper-site-533881.design.webflow.com",
  },
};

export default nextConfig;
