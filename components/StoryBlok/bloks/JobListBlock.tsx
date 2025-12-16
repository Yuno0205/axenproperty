"use client";

import { Input } from "@/components/ui/input";
import { JobPostStoryblok } from "@/types/storyblok";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { BarChart3, Filter, MapPin, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function JobListBlock({
  blok,
  blokProps,
  lang = "en",
}: {
  blok: SbBlokData;
  blokProps?: { content: JobPostStoryblok; slug: string }[];
  lang?: string;
}) {
  const jobs = blokProps || [];

  const mappedJobs = jobs.map((job) => ({
    slug: job.slug,
    name: job.content.name,
    level: job.content.level,
    type: job.content.type,
    location: job.content.location,
    salary: job.content.salary,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const locale = lang?.toLowerCase() === "vi" ? "vi" : "en";

  const translations = {
    en: {
      heading: "Hiring Jobs",
      filters: "Filters",
      keyword: "Keyword...",
      location: "Location",
      allLocations: "All locations",
      level: "Level",
      allLevels: "All levels",
      clearAll: "Clear all filters",
      foundOpenings: "Found",
      openPositions: "open positions",
      empty: "No jobs found matching your criteria",
      clear: "Clear filters",
    },
    vi: {
      heading: "Tuyển dụng",
      filters: "Bộ lọc",
      keyword: "Từ khóa...",
      location: "Địa điểm",
      allLocations: "Tất cả địa điểm",
      level: "Cấp bậc",
      allLevels: "Tất cả cấp bậc",
      clearAll: "Xóa tất cả bộ lọc",
      foundOpenings: "Tìm thấy",
      openPositions: "vị trí đang mở",
      empty: "Không tìm thấy công việc phù hợp",
      clear: "Xóa bộ lọc",
    },
  } as const;

  const t = translations[locale];

  const locations = useMemo(() => {
    const set = new Set(mappedJobs.map((j) => j.location).filter(Boolean));
    return Array.from(set).sort();
  }, [mappedJobs]);

  const levels = useMemo(() => {
    const set = new Set(mappedJobs.map((j) => j.level).filter(Boolean));
    return Array.from(set);
  }, [mappedJobs]);

  const filteredJobs = useMemo(() => {
    return mappedJobs.filter((job) => {
      const matchSearch =
        !searchTerm ||
        job.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLocation =
        selectedLocation === "all" ||
        (job.location?.toLowerCase() ?? "").includes(
          selectedLocation.toLowerCase()
        );
      const matchLevel = selectedLevel === "all" || job.level === selectedLevel;
      return matchSearch && matchLocation && matchLevel;
    });
  }, [mappedJobs, searchTerm, selectedLocation, selectedLevel]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedLevel("all");
  };

  const isFiltering =
    searchTerm !== "" || selectedLocation !== "all" || selectedLevel !== "all";

  const inputClass =
    "h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all";

  return (
    <section
      {...storyblokEditable(blok)}
      className={clsx("w-full py-12 px-4 sm:px-6 lg:px-8 bg-white")}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          {t.heading}
        </h2>
        {blok.title && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              {blok.title as string}
            </h2>
            <p className="mt-2 text-gray-600">
              {t.foundOpenings}{" "}
              <span className="font-semibold text-black">
                {filteredJobs.length}
              </span>{" "}
              {t.openPositions}
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 md:grid-cols-1 gap-8 items-start">
          {/* --- SIDEBAR FILTER --- */}
          <aside className="col-span-1 sticky top-4 md:static md:w-full space-y-6">
            <div className="p-5 bg-transparent rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                <Filter className="w-4 h-4" />
                <span>{t.filters}</span>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t.keyword}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={clsx(inputClass, "pl-9")}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <X className="h-3 w-3 text-gray-400 hover:text-black" />
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase">
                    {t.location}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className={clsx(
                        inputClass,
                        "appearance-none cursor-pointer"
                      )}
                    >
                      <option value="all">{t.allLocations}</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase">
                    {t.level}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className={clsx(
                        inputClass,
                        "appearance-none cursor-pointer"
                      )}
                    >
                      <option value="all">{t.allLevels}</option>
                      {levels.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                    <BarChart3 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {isFiltering && (
                  <button
                    onClick={clearFilters}
                    className="w-full mt-2 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors font-semibold"
                  >
                    {t.clearAll}
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* --- JOB LIST --- */}
          <main className="col-span-3 md:col-span-1 space-y-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((item, index) => (
                <Link
                  key={`${item.slug}-${index}`}
                  href={`/careers/${item.slug}`}
                  className="block group bg-white border border-transparent border-b-gray-200 hover:border-b-black py-4 px-2 transition-all duration-300"
                >
                  <div className="flex flex-col gap-2 min-h-[50px]">
                    <h3 className="text-lg leading-relaxed text-gray-900 flex flex-wrap items-center gap-x-2">
                      <span className="font-semibold whitespace-nowrap">
                        [ {item.location} ]
                      </span>

                      <span className="text-gray-400 font-light">-</span>

                      <span className="font-bold group-hover:underline underline-offset-4 decoration-2 decoration-black">
                        {item.level} - ({item.name})
                      </span>

                      <span className="text-gray-400 font-light hidden sm:inline">
                        -
                      </span>

                      <span className="whitespace-nowrap text-gray-700">
                        {item.type}
                      </span>

                      <span className="whitespace-nowrap text-gray-700">
                        ( {item.salary} )
                      </span>
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                <Search className="h-10 w-10 text-gray-400 mb-3" />
                <p className="text-gray-600 font-medium">{t.empty}</p>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-sm text-black font-bold hover:underline"
                >
                  {t.clear}
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
