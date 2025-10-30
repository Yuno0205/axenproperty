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
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
