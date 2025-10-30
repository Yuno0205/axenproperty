"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Định nghĩa kiểu dữ liệu cho blok từ Storyblok để code an toàn hơn
interface BannerBlok {
  _uid: string;
  component: "banner";
  title: string;
  background_image: {
    id: number;
    alt: string;
    filename: string; // URL của ảnh
  };
  logo: {
    id: number;
    alt: string;
    filename: string; // URL của ảnh
  };
}

// Component Banner giờ sẽ nhận prop 'blok'
export const Banner = ({ blok }: { blok: BannerBlok }) => {
  return (
    // Dòng storyblokEditable(blok) này rất quan trọng để Visual Editor hoạt động
    <section
      {...storyblokEditable(blok)}
      className="w-full flex items-center justify-center"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full relative bg-cover bg-no-repeat flex items-center justify-center bg-center py-20 xs:py-10 2xs:h-96"
      >
        {/* Background Image - Lấy dữ liệu từ blok */}
        <Image
          src={blok.background_image.filename}
          alt={
            blok.background_image.alt || `Axenproperty banner - ${blok.title}`
          }
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
        />

        {/* Nội dung */}
        <div className="h-full w-5/6 bg-[#F2F3F5D9] flex flex-col items-center justify-center text-center gap-5 py-10 z-10">
          {/* Logo - Lấy dữ liệu từ blok */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-72 xs:w-52"
          >
            <Link
              href="/"
              className="flex w-full h-full items-center px-4 relative z-2"
            >
              {/* <Image
                src={blok.logo.filename}
                alt={blok.logo.alt || "Banner Logo"}
                width={173}
                height={154}
                className="object-cover w-full"
                loading="lazy"
              /> */}
              Logo
            </Link>
          </motion.div>

          {/* Tiêu đề - Lấy dữ liệu từ blok */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="avenir text-[#666666] w-full text-5xl flex flex-col font-light capitalize sm:text-4xl px-4 pt-10 2xs:pt-0 pb-10"
          >
            <h1 className="line-clamp-3" id="main-title">
              {blok.title}
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
