import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { Suspense } from "react";

import { getStoryblokApi } from "@/lib/storyblok";
import { draftMode } from "next/headers";
import StoryblokProvider from "@/components/StoryblokProvider";

const proximaNova = localFont({
  src: "./fonts/ProximaNovaRegular.otf",
  variable: "--font-proxima-nova",
  weight: "400 500 600 700 800 900",
});

const proximaBold = localFont({
  src: "./fonts/ProximaNovaBold.otf",
  variable: "--font-proxima-nova-bold",
  weight: "400 500 600 700 800 900",
});

const avenir = localFont({
  src: "./fonts/AvenirLTStd-Book.otf",
  variable: "--font-avenir",
  weight: "400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: {
    default: "Axenproperty -Cung cấp các giải pháp bất động sản chuyên nghiệp",
    template: "%s | Axenproperty",
  },
  description:
    "Khám phá các dự án bất động sản cao cấp tại Việt Nam với Axenproperty - đối tác tin cậy của bạn.",
  keywords: [
    "bất động sản",
    "nhà đất",
    "dự án",
    "Axenproperty",
    "đầu tư bất động sản",
    "chung cư",
    "căn hộ",
    "resort",
  ],
  openGraph: {
    title: "Axenproperty -Cung cấp các giải pháp bất động sản chuyên nghiệp",
    description:
      "Khám phá các dự án bất động sản cao cấp tại Việt Nam với Axenproperty.",
    url: "https://axenproperty.com",
    siteName: "Axenproperty",
    images: [
      {
        url: "https://axenproperty.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axenproperty Showcase",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Axenproperty - Cung cấp các giải pháp bất động sản chuyên nghiệp",
    description: "Khám phá các dự án bất động sản cao cấp tại Việt Nam.",
    images: ["https://axenproperty.com/twitter-image.jpg"],
  },
  verification: {
    google: "4okLy_RckJkUnDQ6GcRG24UqJ1AvX40KQZr0biLtvP4",
  },
  alternates: {
    canonical: "https://axenproperty.com",
    languages: {
      en: "https://axenproperty.com?locale=en",
      vi: "https://axenproperty.com?locale=vi",
    },
  },
};

async function getGlobalData() {
  const { isEnabled } = await draftMode();
  const version = isEnabled ? "draft" : "published";

  try {
    const { data } = await getStoryblokApi().get(`cdn/stories/global`, {
      version: version,
      cv: isEnabled ? Math.random() : undefined,
    });
    return data.story.content;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  if (!globalData) {
    return (
      <html lang="vi">
        <body className={`${proximaNova.variable} antialiased bg-[#f4f4f4]`}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="vi">
      <body
        className={`${proximaNova.variable} ${proximaBold.variable} ${avenir.variable} antialiased bg-[#f4f4f4]`}
      >
        <StoryblokProvider>
          <Suspense>
            <Header blok={globalData} />
            {children}
            <Footer blok={globalData} />
          </Suspense>
        </StoryblokProvider>
      </body>
    </html>
  );
}
