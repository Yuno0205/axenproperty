import { Button } from "@/components/ui/button";
import { getStoryblokApi } from "@/lib/storyblok";
import { storyblokEditable, renderRichText } from "@storyblok/react";
import { ClockIcon, DollarSignIcon, LocateIcon } from "lucide-react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export default async function CareerDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = lang || "en";
  const { isEnabled } = await draftMode();

  try {
    const { data } = await getStoryblokApi().get(`cdn/stories`, {
      version: isEnabled ? "draft" : "published",
      language: locale,
      starts_with: "jobs/",
      by_slugs: `jobs/${slug}`,
    });

    const story = data.stories[0];
    if (!story) return notFound();

    const content = story.content;
    const htmlDescription = renderRichText(content.description);

    return (
      <main
        {...storyblokEditable(content)}
        className="container mx-auto py-20 px-4 bg-white"
      >
        <h1 className="text-4xl font-bold mb-4">{content.name}</h1>
        <div className="flex gap-4 mb-8 text-gray-600">
          <span className="flex items-center gap-2">
            <LocateIcon className="w-4 h-4" /> {content.location}
          </span>
          <span className="flex items-center gap-2">
            <DollarSignIcon className="w-4 h-4" /> {content.salary}
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4" /> {content.experience}
          </span>
        </div>
        <div
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: htmlDescription as string }}
        />

        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          Apply now
        </Button>
      </main>
    );
  } catch (e: unknown) {
    console.error("Error fetching job details:", e);
    return notFound();
  }
}
