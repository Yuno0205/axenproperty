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

  return {
    title: story?.content?.title || "Careers",
    description: story?.content?.description || "",
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
