"use client";

import { fetchContentfulData } from "@/lib/fetchContentful";
import { PropertiesFields } from "@/types/contentful";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Properties = () => {
  // Ref để theo dõi phần tử inView
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<PropertiesFields>();
  const searchParams = useSearchParams();

  // Lấy locale từ URL, mặc định là "en"
  const currentLocale = searchParams.get("locale") || "en";

  // Fetch dữ liệu từ Contentful khi component mount
  useEffect(() => {
    async function loadData() {
      const result = await fetchContentfulData(
        "properties",
        currentLocale === "vi" ? "vi" : "en-US"
      );
      setData(result[0]); // Lấy phần tử đầu tiên từ danh sách dữ liệu
    }
    loadData();
  }, [currentLocale]);

  console.log(data);

  if (!data) return <Skeleton count={3} />;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${data.backgroundImage.url})`,
      }}
      className="mt-10 aspect-video bg-cover text-center bg-no-repeat bg-center"
    >
      {/* Tiêu đề và nội dung */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="w-full pt-20 xs:pt-10 px-10 xs:px-4"
      >
        {/* Tiêu đề */}
        <span
          className={clsx(
            poppins.className,
            "text-6xl font-bold text-[#666666] xs:text-4xl"
          )}
        >
          {data.title}
        </span>

        {/* Nội dung */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          className="w-2/3 max-w-[780px] mx-auto text-justify text-[#666666] py-5 xs:text-center px-4 xs:w-full"
        >
          <span className="font-semibold">{data.content[0]}</span> is a
          pioneering entity in the field of real estate development and
          services, with a mission to create premium living spaces that
          harmoniously blend modern style, elegance, and timeless
          sustainability.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
