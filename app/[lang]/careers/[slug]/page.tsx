import { Button } from "@/components/ui/button";
import { getStoryblokApi } from "@/lib/storyblok";
import {
  storyblokEditable,
  renderRichText,
  SbBlokData,
} from "@storyblok/react";
import {
  Briefcase,
  MapPin,
  DollarSign,
  ArrowLeft,
  BarChart3,
  Share2,
} from "lucide-react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import clsx from "clsx";
import { JobPostStoryblok } from "@/types/storyblok";

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
    const htmlDescription = renderRichText(content.description);

    return (
      <main
        {...storyblokEditable(content as unknown as SbBlokData)}
        className={clsx(
          openSans.className,
          "min-h-screen bg-white pb-20 pt-10"
        )}
      >
        {/* --- 1. HEADER SECTION --- */}
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb / Back Button */}
          <Link
            href={`/${lang}/careers`}
            className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Open Positions
          </Link>

          {/* Job Title & Main Meta */}
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

          {/* --- 2. LAYOUT GRID (2 Columns) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900">
                <div
                  dangerouslySetInnerHTML={{
                    __html: htmlDescription as string,
                  }}
                />
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 lg:hidden">
                <h3 className="font-bold text-lg mb-4">
                  Interested in this role?
                </h3>
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 text-lg">
                  Apply for this Job
                </Button>
              </div>
            </div>

            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                {/* Apply Card */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Ready to apply?
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Please read the description carefully before applying.
                  </p>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold h-12 text-base shadow-lg hover:shadow-xl transition-all">
                    Apply Now
                  </Button>

                  {/* Share button (Optional) */}
                  <Button
                    variant="outline"
                    className="w-full mt-3 border-gray-300 hover:bg-white text-gray-600"
                  >
                    <Share2 className="w-4 h-4 mr-2" /> Share this job
                  </Button>
                </div>

                {/* Quick Info Box (Optional) */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
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
                      <span className="text-gray-500 text-sm">Experience</span>
                      <span className="text-gray-900 font-medium text-sm text-right">
                        {content.level}
                      </span>
                    </li>
                    <li className="flex justify-between items-start">
                      <span className="text-gray-500 text-sm">Work Type</span>
                      <span className="text-gray-900 font-medium text-sm text-right">
                        {content.type}
                      </span>
                    </li>
                  </ul>
                </div>
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
