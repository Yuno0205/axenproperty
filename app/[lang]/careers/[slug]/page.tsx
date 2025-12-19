import JobApplicationForm from "@/components/JobApplicationForm";
import { getStoryblokApi } from "@/lib/storyblok";
import { JobPostStoryblok } from "@/types/storyblok";
import { renderRichText, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  DollarSign,
  MapPin,
} from "lucide-react";
import { Open_Sans } from "next/font/google";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";

const sanitize = (html: string) => {
  return sanitizeHtml(html);
};

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

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

    const content = story.content as JobPostStoryblok;

    return (
      <main
        {...storyblokEditable(story)}
        className={clsx(
          openSans.className,
          "min-h-screen bg-gray-50/30 pb-20 pt-10"
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href={`/${lang}/careers`}
            className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Open Positions
          </Link>

          <div className="border-b border-gray-100 pb-8 mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {content.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm md:text-base text-gray-600">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                {content.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-400" />
                {content.type}
              </span>
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-gray-400" />
                {content.level}
              </span>
              <span className="flex items-center gap-2 font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">
                <DollarSign className="w-4 h-4" />
                {content.salary}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 lg:grid-cols-1 gap-10 items-start">
            <div className="col-span-8 lg:col-span-full bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitize(
                      (renderRichText(content.description) ?? "") as string
                    ),
                  }}
                />
              </div>
            </div>

            <aside className="col-span-4 lg:col-span-full space-y-6 sticky top-8 lg:static">
              <JobApplicationForm position={content.name} />

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Job Overview
                </h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">Published</span>
                    <span className="text-gray-900 font-medium text-sm text-right">
                      {new Date(
                        story.published_at || story.created_at
                      ).toLocaleDateString()}
                    </span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">Level</span>
                    <span className="text-gray-900 font-medium text-sm text-right">
                      {content.level}
                    </span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">Type</span>
                    <span className="text-gray-900 font-medium text-sm text-right">
                      {content.type}
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    );
  } catch (e: unknown) {
    console.error("Error fetching job details:", e);
    return notFound();
  }
}
