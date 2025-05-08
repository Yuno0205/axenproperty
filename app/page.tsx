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
      url: "https://images.ctfassets.net/nu40wp00r0zn/30Vdv79HMe2PNKSPZzO2H1/379566dcc234ba80815667b98c4e3807/logo.png",
      width: 303,
      height: 265,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 3, Street No. 4, Himlam Residential Area, District 7",
      addressLocality: "Ho Chi Minh City, Vietnam",
      postalCode: "12345",
      addressCountry: "VN",
    },
    telephone: ["+84963509060", "+84961706960"],
    email: "People@axenproperty.com",
    sameAs: [
      "https://www.facebook.com/axenproperty",
      "https://www.linkedin.com/company/axen-property",
      "https://www.threads.com/@axenproperty",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
