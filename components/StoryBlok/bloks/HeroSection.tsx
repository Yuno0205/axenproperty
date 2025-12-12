"use client";

import { SbBlokData, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Asset } from "@/types/storyblok";
import { cn, getStoryblokAssetDimensions } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface IHeroSectionStoryblok extends SbBlokData {
  title: string;
  background_image: Pick<Asset, "filename" | "alt">;
  logo: Pick<Asset, "filename" | "alt">;
  background_fit?: "object-cover" | "object-contain" | "object-auto";
  background_position?:
    | "object-center"
    | "object-top"
    | "object-bottom"
    | "object-left"
    | "object-right";
}

export const HeroSection = ({ blok }: { blok: IHeroSectionStoryblok }) => {
  const heroLogoDimensions = getStoryblokAssetDimensions(blok.logo?.filename);
  const pathname = usePathname();
  const currentLang = pathname?.split("/")[1] === "vi" ? "vi" : "en";

  return (
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
        className="w-full relative bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 md:py-16 sm:py-12 xs:py-10 2xs:py-8 min-h-[500px] md:min-h-[450px] sm:min-h-[400px] xs:min-h-[350px] 2xs:min-h-[300px] 2xs:h-auto"
      >
        {/* Background Image  */}
        <Image
          src={
            blok.background_image?.filename?.trim() || "/images/placeholder.png"
          }
          alt={
            blok.background_image?.alt ||
            `Axenproperty HeroSection - ${blok.title}`
          }
          fill
          fetchPriority="high"
          quality={75}
          priority
          sizes="100vw"
          className={cn(
            "z-0",
            blok.background_position || "object-center",
            blok.background_fit || "object-auto"
          )}
        />

        {/* Content */}
        <div className="h-full w-2/3 md:w-3/4 sm:w-5/6 xs:w-[90%] 2xs:w-full bg-[#EBF0FF] flex flex-col items-center justify-center text-center gap-2 md:gap-3 sm:gap-2 xs:gap-2 2xs:gap-1 py-10 md:py-8 sm:py-6 xs:py-5 2xs:py-4 z-10 opacity-80">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-72 md:w-64 sm:w-56 xs:w-52 2xs:w-44"
          >
            <Link
              href={`/${currentLang}`}
              className="flex w-full h-full items-center px-4 md:px-3 sm:px-3 xs:px-2 2xs:px-2 relative z-10"
            >
              <Image
                src={
                  blok.logo?.filename?.trim() ||
                  "/static/images/placeholder.png"
                }
                alt={blok.logo?.alt || "HeroSection Logo"}
                width={heroLogoDimensions?.width ?? 303}
                height={heroLogoDimensions?.height ?? 154}
                className="w-full h-auto max-w-[300px] md:max-w-[260px] sm:max-w-[230px] xs:max-w-[210px] 2xs:max-w-[180px]"
              />
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="avenir text-[#666666] w-full text-4xl md:text-3xl sm:text-2xl xs:text-xl 2xs:text-lg flex flex-col font-light capitalize px-4 md:px-3 sm:px-3 xs:px-2 pb-10 md:pb-8 sm:pb-6 xs:pb-4 2xs:px-2 2xs:pb-2"
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
