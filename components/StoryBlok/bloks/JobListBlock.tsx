"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, X, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { JobListBlok, JobPostStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
});

type JobStory = {
  name: string;
  slug: string;
  full_slug: string;
  uuid: string;
  content: JobPostStoryblok;
};

type JobData = {
  fields: {
    slug: string;
    name: string;
    field: string;
    experience: string;
    address: string;
    salary?: string;
  };
};

export default function JobListBlock({
  blok,
  blokProps,
}: {
  blok: JobListBlok;
  blokProps?: JobStory[];
}) {
  const jobs = blokProps || [];

  const mappedJobs: JobData[] = jobs.map((job) => {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedField, setSelectedField] = useState<string>("all");

  const locations = useMemo(() => {
    const locationSet = new Set<string>();
    mappedJobs.forEach((job) => {
      job.fields.address
        .split(", ")
        .forEach((loc) => locationSet.add(loc.trim()));
    });
    return Array.from(locationSet).sort();
  }, [mappedJobs]);

  const fields = useMemo(() => {
    const fieldSet = new Set(mappedJobs.map((job) => job.fields.field));
    return Array.from(fieldSet).sort();
  }, [mappedJobs]);

  const filteredJobs = useMemo(() => {
    return mappedJobs.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.fields.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.fields.field.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        selectedLocation === "all" ||
        job.fields.address
          .toLowerCase()
          .includes(selectedLocation.toLowerCase());
      const matchesField =
        selectedField === "all" || job.fields.field === selectedField;
      return matchesSearch && matchesLocation && matchesField;
    });
  }, [mappedJobs, searchTerm, selectedLocation, selectedField]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedField("all");
  };

  const inputClass =
    "h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all";

  return (
    <div
      {...storyblokEditable(blok)}
      className={clsx(
        openSans.className,
        "w-full py-12 px-4 sm:px-6 lg:px-8 bg-white"
      )}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {blok.title && (
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">{blok.title}</h2>
            <p className="mt-2 text-gray-600">
              Found {filteredJobs.length} jobs
            </p>
          </div>
        )}

        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search */}
            <div className="sm:col-span-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={clsx(inputClass, "pl-9")}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Location Select */}
            <div className="sm:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={clsx(inputClass, "appearance-none cursor-pointer")}
              >
                <option value="all">All locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Field Select */}
            <div className="sm:col-span-3">
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className={clsx(inputClass, "appearance-none cursor-pointer")}
              >
                <option value="all">All fields</option>
                {fields.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Nút Clear Filter (chỉ hiện khi cần) */}
          {(searchTerm ||
            selectedLocation !== "all" ||
            selectedField !== "all") && (
            <div className="mt-3 text-right">
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 hover:text-red-700 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* --- 2. JOB LIST (Quay về dạng List đơn giản) --- */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item, index) => (
              <Link
                key={`${item.fields.slug}-${index}`}
                href={`/careers/${item.fields.slug}`}
                className="block group bg-white rounded-lg border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.fields.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span>{item.fields.field}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{item.fields.address}</span>
                      </div>
                      {/* Thêm kinh nghiệm nếu cần */}
                      <div className="hidden sm:flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{item.fields.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Salary or Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    {item.fields.salary && (
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                        {item.fields.salary}
                      </span>
                    )}
                    <span className="text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                      View details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Not found any job</p>
              <button
                onClick={clearFilters}
                className="mt-2 text-blue-600 font-medium hover:underline"
              >
                Try to clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
