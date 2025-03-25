"use client";

import { fetchContentfulData } from "@/lib/fetchContentful";
import { PropertiesFields } from "@/types/contentful";
import clsx from "clsx";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Properties = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref);
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

  if (!data) return <Skeleton height={300} />;

  return (
    <div className="mt-10 aspect-video bg-cover text-center bg-no-repeat bg-center w-full relative">
      {/* Image background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", once: true }}
        className="w-full h-full relative"
      >
        <Image
          src={`${data?.backgroundImage.url}`}
          alt="banner"
          fill
          className="object-cover z-0"
          quality={75}
          priority
        />
      </motion.div>

      {/* Tiêu đề và nội dung */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="w-full pt-20 xs:pt-10 px-10 xs:px-4 z-10 absolute top-0 left-0"
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
          <span className="font-semibold">{data.content[0]}</span>{" "}
          {data.content[1]}
        </motion.div>
      </motion.div>
    </div>
  );
};
