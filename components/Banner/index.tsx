"use client";

import { fetchContentfulData } from "@/lib/fetchContentful";
import { BannerFields } from "@/types/contentful";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

export const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<BannerFields>();
  const searchParams = useSearchParams();

  // Lấy locale từ URL, mặc định là "en"
  const currentLocale = searchParams.get("locale") || "en";

  // Fetch dữ liệu từ Contentful khi component mount
  useEffect(() => {
    async function loadData() {
      const result = await fetchContentfulData(
        "banner",
        currentLocale === "vi" ? "vi" : "en-US"
      );
      setData(result[0]); // Lấy phần tử đầu tiên từ danh sách dữ liệu
    }
    loadData();
  }, [currentLocale]);

  if (!data) return <Skeleton height={600} />;

  return (
    <section className="w-full flex items-center justify-center" ref={ref}>
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative bg-cover bg-no-repeat flex items-center justify-center bg-center py-20 xs:py-10 2xs:h-96"
      >
        {/* Background Image */}
        <Image
          src={`${data?.backgroundImage.url}`}
          alt="banner"
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
        />
        {/* Nội dung */}
        <div className="h-full w-5/6 bg-[#F2F3F5D9] flex flex-col items-center justify-center text-center gap-5 py-10 z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-72 xs:w-52"
          >
            <Link
              href="/"
              className="flex w-full h-full items-center px-4 relative z-2"
            >
              <Image
                src={`${data?.logo.url}`}
                alt="banner"
                width={173}
                height={154}
                className="object-cover w-full"
              />
            </Link>
          </motion.div>

          {/* Tiêu đề */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="avenir text-[#666666] w-full text-5xl flex flex-col font-light capitalize sm:text-4xl px-4 pt-10 2xs:pt-0 pb-10"
          >
            <h1 className="line-clamp-3">{data.title}</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
