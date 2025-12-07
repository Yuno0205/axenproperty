"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobListBlok, JobPostStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
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

  // Extract unique locations and fields from data
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

  // Filter jobs
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

  const hasActiveFilters =
    searchTerm !== "" || selectedLocation !== "all" || selectedField !== "all";

  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {blok.title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 px-4">
          {blok.title}
        </h2>
      )}

      <div className={clsx(openSans.className, "w-full")}>
        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-10 space-y-4 sm:space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            <Input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc lĩnh vực..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 sm:pl-12 pr-10 sm:pr-12 h-12 sm:h-14 text-sm sm:text-base border-2 border-gray-200 focus:border-gray-400 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-3">
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">
              <span className="text-sm sm:text-base font-semibold text-gray-700 sm:mr-2 block sm:inline">
                Lọc theo:
              </span>

              {/* Location Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-white hover:border-gray-300 transition-colors shadow-sm"
                >
                  <option value="all">Tất cả địa điểm</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full sm:w-auto px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 bg-white hover:border-gray-300 transition-colors shadow-sm"
                >
                  <option value="all">Tất cả lĩnh vực</option>
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full sm:w-auto text-sm sm:text-base px-4 py-2.5 border-2 hover:bg-gray-50"
                >
                  Xóa bộ lọc
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-sm sm:text-base text-gray-600 sm:text-right">
              Tìm thấy{" "}
              <span className="font-semibold text-gray-900">
                {filteredJobs.length}
              </span>{" "}
              vị trí tuyển dụng
              {hasActiveFilters && " phù hợp"}
            </div>
          </div>
        </div>

        {/* Job List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-0 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {filteredJobs.map((item, index) => (
              <Link
                key={`${item.fields.slug}-${index}`}
                href={`/careers/${item.fields.slug}`}
                prefetch
                className="block group"
              >
                <div className="border-t border-gray-200 first:border-t-0 p-6 sm:p-8 hover:bg-gray-50/80 active:bg-gray-100 transition-all duration-200 cursor-pointer bg-white">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                      {item.fields.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                        <span className="font-medium">{item.fields.field}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                        <span>{item.fields.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                        <span>{item.fields.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 lg:py-24 border border-gray-200 rounded-lg bg-gray-50/50">
            <div className="max-w-md mx-auto px-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-700 text-lg sm:text-xl font-semibold mb-2">
                Không tìm thấy vị trí nào phù hợp
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                Vui lòng thử lại với từ khóa hoặc bộ lọc khác
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
