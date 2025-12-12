"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Search,
  X,
  ArrowRight,
  RefreshCcw,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobListBlok, JobPostStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
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

  const hasActiveFilters =
    searchTerm !== "" || selectedLocation !== "all" || selectedField !== "all";

  // Common style cho input/select để đồng bộ
  const inputStyles =
    "h-10 bg-white border-gray-200 focus-visible:ring-0 focus-visible:border-gray-500 focus-visible:ring-offset-0 hover:border-gray-400 transition-colors text-sm";

  return (
    <div
      {...storyblokEditable(blok)}
      className={clsx(openSans.className, "w-full bg-white min-h-screen")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        {blok.title && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              {blok.title}
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Hiện có{" "}
              <span className="font-semibold text-gray-900">
                {mappedJobs.length}
              </span>{" "}
              vị trí đang mở.
            </p>
          </div>
        )}

        {/* --- COMPACT FILTER BAR --- */}
        <div className="bg-white rounded-lg border border-gray-200 p-3 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search Input - Flex grow để chiếm phần còn lại */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm kiếm vị trí..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={clsx(inputStyles, "pl-9")}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Location Select - Width cố định vừa phải trên desktop */}
            <div className="relative lg:w-48 flex-shrink-0">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={clsx(
                  inputStyles,
                  "w-full pl-9 pr-8 appearance-none border rounded-md cursor-pointer outline-none"
                )}
              >
                <option value="all">Địa điểm</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Field Select */}
            <div className="relative lg:w-48 flex-shrink-0">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className={clsx(
                  inputStyles,
                  "w-full pl-9 pr-8 appearance-none border rounded-md cursor-pointer outline-none"
                )}
              >
                <option value="all">Lĩnh vực</option>
                {fields.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Clear Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              className="h-10 w-10 flex-shrink-0 border-gray-200 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30"
              title="Xóa bộ lọc"
            >
              <RefreshCcw className="w-4 h-4" />
            </Button>
          </div>

          {/* Kết quả tìm kiếm text nhỏ */}
          {hasActiveFilters && (
            <div className="mt-2 text-xs text-gray-500 px-1">
              Tìm thấy {filteredJobs.length} kết quả phù hợp.
            </div>
          )}
        </div>

        {/* --- JOB LIST (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((item, index) => (
              <Link
                key={`${item.fields.slug}-${index}`}
                href={`/careers/${item.fields.slug}`}
                prefetch
                className="group block bg-white rounded-lg border border-gray-200 p-5 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 mb-2 group-hover:bg-gray-200 transition-colors">
                      {item.fields.field}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-black mb-1 line-clamp-1">
                      {item.fields.name}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all" />
                </div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    {item.fields.address}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {item.fields.experience}
                  </div>
                  {item.fields.salary && (
                    <div className="flex items-center font-medium text-gray-700">
                      <span className="mr-1.5">💰</span>
                      {item.fields.salary}
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center border border-dashed border-gray-300 rounded-lg bg-white/50">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-900 font-medium">
                Không tìm thấy công việc nào
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-900 underline mt-1"
              >
                Xóa bộ lọc để thử lại
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
