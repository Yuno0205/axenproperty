import { Banner } from "@/components/Banner";
import { Development } from "@/components/Development";
import { Properties } from "@/components/Properties";
import { Solutions } from "@/components/Solution";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Showcase Dự án Bất động sản | Axenproperty",
  description:
    "Khám phá các dự án bất động sản đẳng cấp từ Axenproperty. Nơi mang đến những cơ hội đầu tư và không gian sống hoàn hảo.",
};

export default function Home() {
  return (
    <Suspense>
      <main>
        <Banner />
        <Properties />
        <Development />
        <Solutions />
        <OrganizationSchema />
      </main>
    </Suspense>
  );
}

// Component Schema.org cho trang chủ
function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://axenproperty.com/#organization",
    name: "Axenproperty",
    url: "https://axenproperty.com",
    logo: {
      "@type": "ImageObject",
      url: "https://axenproperty.com/logo.png",
      width: 112,
      height: 112,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Đường ABC",
      addressLocality: "Hà Nội",
      postalCode: "10000",
      addressCountry: "VN",
    },
    telephone: "+84123456789",
    email: "contact@axenproperty.com",
    sameAs: [
      "https://www.facebook.com/axenproperty",
      "https://www.linkedin.com/company/axenproperty",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
