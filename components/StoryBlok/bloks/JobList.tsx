"use client";
import JobList from "@/app/[lang]/careers/JobList";
import { JobPostStoryblok } from "@/types/storyblok";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

type JobStory = {
  content: JobPostStoryblok;
  slug: string;
  full_slug: string;
};

export interface IJobListBlok extends SbBlokData {
  title?: string;
}

export default function JobListBlock({
  blok,
  jobs,
}: {
  blok: IJobListBlok;
  jobs: JobStory[];
}) {
  const mappedJobs =
    jobs?.map((job) => ({
      fields: {
        slug: job.slug,
        name: job.content.name,
        field: job.content.field,
        experience: job.content.experience,
        address: job.content.location,
      },
    })) || [];

  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full max-w-5xl mx-auto px-5 py-10"
    >
      {blok.title && <h2 className="text-2xl font-bold mb-6">{blok.title}</h2>}
      <JobList data={mappedJobs} />
    </div>
  );
}
