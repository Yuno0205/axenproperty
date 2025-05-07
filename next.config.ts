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
    NEXT_PUBLIC_PLASMIC_PROJECT_ID: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID,
    NEXT_PUBLIC_PLASMIC_API_TOKEN: process.env.NEXT_PUBLIC_PLASMIC_API_TOKEN,
  },
};

export default nextConfig;
