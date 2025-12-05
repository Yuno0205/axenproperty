"use client";

import JobList from "@/app/[lang]/careers/JobList";
import { JobListBlok, JobPostStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";

type JobStory = {
  name: string;
  slug: string;
  full_slug: string;
  uuid: string;
  content: JobPostStoryblok;
};

export default function JobListBlock({
  blok,
  blokProps,
}: {
  blok: JobListBlok;
  blokProps?: JobStory[];
}) {
  const jobs = blokProps || [];

  const mappedJobs = jobs.map((job) => {
    const fieldDisplay =
      !job.content.field || job.content.field === "Not defined"
        ? "General"
        : job.content.field;

    return {
      fields: {
        slug: job.slug,
        name: job.content.name,
        field: fieldDisplay,
        experience: job.content.experience,
        address: job.content.location,
        salary: job.content.salary,
      },
    };
  });

  return (
    <div {...storyblokEditable(blok)} className="w-full">
      {blok.title && (
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          {blok.title}
        </h2>
      )}
      <JobList data={mappedJobs} />
    </div>
  );
}
