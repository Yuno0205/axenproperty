"use client";
import { fetchContentfulData } from "@/lib/fetchContentful";
import { DevelopmentFields } from "@/types/contentful";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "../ui/button";

export const Development = () => {
  const ref = useRef(null); // Tạo ref để theo dõi phần tử

  const [data, setData] = useState<DevelopmentFields>();
  const searchParams = useSearchParams();

  // Lấy locale từ URL, mặc định là "en"
  const currentLocale = searchParams.get("locale") || "en";

  // Fetch dữ liệu từ Contentful khi component mount
  useEffect(() => {
    async function loadData() {
      const result = await fetchContentfulData(
        "development",
        currentLocale === "vi" ? "vi" : "en-US"
      );
      setData(result[0]); // Lấy phần tử đầu tiên từ danh sách dữ liệu
    }
    loadData();
  }, [currentLocale]);

  console.log(data);

  if (!data) return <Skeleton height={300} />;

  return (
    <section className="w-full h-full">
      <div className="w-full relative py-10">
        <div className="w-full h-[365px] relative">
          <Image
            src={`${data?.backgroundImage.url}`}
            alt="apartment"
            fill
            className="w-full object-cover h-full"
          />
        </div>
        <div className="w-2/5 sm:w-full px-4">
          <motion.div
            ref={ref} // Liên kết ref với motion.div
            initial={{ opacity: 0, x: -300 }} // Ẩn đi ban đầu
            whileInView={{ opacity: 1, x: 0 }} // Hiển thị khi trong tầm nhìn
            transition={{
              duration: 0.8, // Thời gian hiệu ứng
              ease: "easeOut",
            }}
            className="mt-[-300px] sm:mt-[-50px] h-[365px] ml-12 sm:mx-auto px-16 py-12 bg-white w-full flex flex-col justify-center shadow-lg z-2 relative xs:text-center"
          >
            <span className="avenir text-3xl font-light uppercase">
              {data.title}
            </span>
            <span className="my-2.5">{data.text}</span>

            <Button className="w-40 my-5">
              <span className="font-bold text-lg capitalize">
                {data.btnText}
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
