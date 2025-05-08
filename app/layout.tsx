import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import { Suspense } from "react";

const proximaNova = localFont({
  src: "./fonts/ProximaNovaRegular.otf",
  variable: "--font-proxima-nova",
  weight: "400 500 600 700 800 900",
});

// Xóa dòng này để không xuất proximaBold
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
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://axenproperty.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${proximaNova.variable} ${proximaBold.variable} ${avenir.variable} antialiased bg-[#f4f4f4]`}
      >
        <Suspense>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
