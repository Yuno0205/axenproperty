"use client";

import { motion, useInView } from "framer-motion";
import { BannerFields } from "@/types/contentful";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  data: BannerFields;
};

export const Banner = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full flex items-center justify-center">
      {/* Background */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${data?.backgroundImage?.url})`,
        }}
        className="w-full relative bg-cover bg-no-repeat flex items-center justify-center bg-center py-20 xs:py-10 2xs:h-96"
      >
        {/* Nội dung */}
        <div className="h-full w-5/6 bg-[#F2F3F5D9] flex flex-col items-center justify-center text-center gap-5 py-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-72 xs:w-52"
          >
            <Link
              href="/"
              className="flex w-full h-full items-center px-4 relative z-2"
            >
              <Image
                src={`${data.logo?.url}`}
                alt="logo"
                width={173}
                height={154}
                className="object-cover w-full"
              />
            </Link>
          </motion.div>

          {/* Tiêu đề */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="avenir text-[#666666] w-full text-5xl flex flex-col font-light capitalize sm:text-4xl px-4 pt-10 2xs:pt-0 pb-10"
          >
            <span className="line-clamp-3">{data.title}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
