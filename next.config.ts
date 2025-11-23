import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Note: i18n config is only for Pages Router, not App Router
  // We use middleware.ts for language routing in App Router
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
