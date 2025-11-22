import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export const revalidate = 3600;

async function fetchData(locale: string) {
  const { isEnabled } = await draftMode();
  const version = isEnabled ? "draft" : "published";

  try {
    const { data } = await getStoryblokApi().get(`cdn/stories/home`, {
      version: version,
      language: locale,
      cv: isEnabled ? Math.random() : undefined, // Cache buster for preview mode
    });
    return data;
  } catch (error) {
    console.error(`Error fetching home data for locale ${locale}:`, error);
    return null;
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang || "en";

  const data = await fetchData(locale);

  if (!data) {
    notFound();
  }

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
    </div>
  );
}
