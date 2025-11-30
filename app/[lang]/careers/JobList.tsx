"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

interface JobData {
  fields: {
    slug: string;
    name: string;
    field: string;
    experience: string;
    address: string;
  };
}

interface JobListProps {
  data: JobData[];
}

export default function JobList({ data }: JobListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedField, setSelectedField] = useState<string>("all");

  // Extract unique locations and fields from data
  const locations = useMemo(() => {
    const locationSet = new Set<string>();
    data.forEach((job) => {
      job.fields.address
        .split(", ")
        .forEach((loc) => locationSet.add(loc.trim()));
    });
    return Array.from(locationSet).sort();
  }, [data]);

  const fields = useMemo(() => {
    const fieldSet = new Set(data.map((job) => job.fields.field));
    return Array.from(fieldSet).sort();
  }, [data]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return data.filter((job) => {
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
  }, [data, searchTerm, selectedLocation, selectedField]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedField("all");
  };

  const hasActiveFilters =
    searchTerm !== "" || selectedLocation !== "all" || selectedField !== "all";

  return (
    <div className={clsx(openSans.className, "w-full")}>
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc lĩnh vực..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-10 h-12 text-base"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-semibold text-gray-700 mr-2">
            Lọc theo:
          </span>

          {/* Location Filter */}
          <div className="flex items-center gap-2">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
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
          <div className="flex items-center gap-2">
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
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
              className="text-sm"
            >
              Xóa bộ lọc
            </Button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          Tìm thấy <span className="font-semibold">{filteredJobs.length}</span>{" "}
          vị trí tuyển dụng
          {hasActiveFilters && " phù hợp"}
        </div>
      </div>

      {/* Job List */}
      {filteredJobs.length > 0 ? (
        <div className="space-y-0">
          {filteredJobs.map((item, index) => (
            <Link
              key={index}
              href={`/careers/${item.fields.slug}`}
              prefetch
              className="block group"
            >
              <div className="border-t border-gray-200 p-8 2xs:p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-[#202325] group-hover:text-[#1a1c1e] transition-colors">
                    {item.fields.name}
                  </h3>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 2xs:gap-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{item.fields.field}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{item.fields.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{item.fields.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-t border-gray-200">
          <p className="text-gray-500 text-lg mb-2">
            Không tìm thấy vị trí nào phù hợp
          </p>
          <p className="text-gray-400 text-sm">
            Vui lòng thử lại với từ khóa hoặc bộ lọc khác
          </p>
        </div>
      )}
    </div>
  );
}
