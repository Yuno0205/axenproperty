import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

async function fetchCareerPage(locale: string) {
  const { isEnabled } = await draftMode();
  const api = getStoryblokApi();
  try {
    const { data } = await api.get(`cdn/stories/careers`, {
      version: isEnabled ? "draft" : "published",
      language: locale,
    });
    return data.story;
  } catch (e: unknown) {
    console.error("Error fetching career page:", e);
    return null;
  }
}

async function fetchJobs(locale: string) {
  const { isEnabled } = await draftMode();
  const api = getStoryblokApi();
  try {
    const { data } = await api.get(`cdn/stories`, {
      version: isEnabled ? "draft" : "published",
      language: locale,
      starts_with: "jobs/",
      content_type: "job_post",
    });
    return data.stories;
  } catch (e: unknown) {
    console.error("Error fetching jobs:", e);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang || "en";
  const story = await fetchCareerPage(locale);

  const title = story?.content?.title || "Careers";
  const description =
    story?.content?.description ||
    "Khám phá cơ hội nghề nghiệp tại Axenproperty - Nơi tài năng gặp gỡ cơ hội phát triển.";
  const ogImage =
    story?.content?.og_image?.filename ||
    "https://axenproperty.com/og-image.jpg";
  const canonicalUrl = `https://axenproperty.com/${locale}/careers`;

  return {
    title: title,
    description: description,
    keywords: [
      "tuyển dụng",
      "careers",
      "cơ hội nghề nghiệp",
      "việc làm",
      "Axenproperty",
      "tuyển dụng bất động sản",
      "career opportunities",
    ],
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: "Axenproperty",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
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
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://axenproperty.com/en/careers",
        vi: "https://axenproperty.com/vi/careers",
      },
    },
  };
}

export default async function Careers({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang || "en";

  const [story, jobs] = await Promise.all([
    fetchCareerPage(locale),
    fetchJobs(locale),
  ]);

  if (!story) return notFound();

  return (
    <div>
      <StoryblokStory story={story} blokProps={jobs} lang={locale} />
    </div>
  );
}
