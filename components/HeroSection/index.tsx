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
        className="w-full relative bg-cover bg-center bg-no-repeat flex items-center justify-center  py-20 xs:py-10 2xs:h-96"
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
          className={cn(
            "z-0",
            blok.background_position || "object-center",
            blok.background_fit || "object-auto"
          )}
          quality={100}
          priority
        />

        {/* Content */}
        <div className="h-full w-2/3 bg-[#EBF0FF] flex flex-col items-center justify-center text-center gap-2 py-10 z-10 opacity-80">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-72 xs:w-52"
          >
            <Link
              href={`/${currentLang}`}
              className="flex w-full h-full items-center px-4 relative z-10"
            >
              <Image
                src={blok.logo?.filename?.trim() || "/images/placeholder.png"}
                alt={blok.logo?.alt || "HeroSection Logo"}
                width={heroLogoDimensions?.width ?? 303}
                height={heroLogoDimensions?.height ?? 154}
                className="w-full h-auto max-w-[300px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="avenir text-[#666666] w-full text-4xl flex flex-col font-light capitalize sm:text-4xl px-4 pb-10 2xs:px-0 2xs:pb-2"
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
