import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Axenproperty - Cung cấp các giải pháp bất động sản chuyên nghiệp",
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
    title: "Axenproperty - Cung cấp các giải pháp bất động sản chuyên nghiệp",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </StoryblokProvider>
  );
}
