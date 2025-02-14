"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import { DevelopmentFields } from "@/types/contentful";

type Props = {
  data: DevelopmentFields;
};

export const Development = ({ data }: Props) => {
  const ref = useRef(null); // Tạo ref để theo dõi phần tử
  const isInView = useInView(ref, { amount: 0.2 }); // Theo dõi khi phần tử xuất hiện

  return (
    <section className="w-full h-full">
      <div className="w-full relative py-10">
        <div className="w-full h-[365px] relative">
          <Image
            src={`https:${data?.backgroundImage?.fields?.file?.url}`}
            alt="apartment"
            fill
            className="w-full object-cover h-full"
          />
        </div>
        <div className="w-2/5 sm:w-full px-4">
          <motion.div
            ref={ref} // Liên kết ref với motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Trượt theo trục X
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
