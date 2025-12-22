"use client";

import { ShowcaseBlok } from "@/types/storyblok";
import { renderRichText, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import DOMPurify from "dompurify";

const sanitizeHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  return DOMPurify.sanitize(html);
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const getTextAlign = (align?: string) => {
  switch (align) {
    case "left":
      return "text-left mx-0 xs:text-left";
    case "right":
      return "text-right ml-auto mr-0 xs:text-right";
    case "center":
    default:
      return "text-center mx-auto xs:text-center";
  }
};

const getObjectPosition = (position?: string) => {
  switch (position) {
    case "top":
      return "object-top";
    case "bottom":
      return "object-bottom";
    case "center":
    default:
      return "object-center";
  }
};

export default function Showcase({ blok }: { blok: ShowcaseBlok }) {
  const textAlignClass = getTextAlign(blok.text_alignment);
  const objectPositionClass = getObjectPosition(blok.background_position);

  return (
    <section
      {...storyblokEditable(blok)}
      className="aspect-video sm:aspect-[21/9] xs:aspect-[4/5] bg-cover text-center bg-no-repeat w-full relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full relative min-h-[300px] xs:min-h-[400px]"
      >
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt || blok.title}
          fill
          className={clsx("object-cover z-0", objectPositionClass)}
          quality={75}
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className={clsx(
          "w-full pt-20 md:pt-16 sm:pt-12 xs:pt-8 px-10 md:px-8 sm:px-6 xs:px-4 z-10 absolute top-0 left-0",
          textAlignClass
        )}
      >
        <h2
          className={clsx(
            poppins.className,
            "text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold text-[#666666] sm:text-white"
          )}
        >
          {blok.title}
        </h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          className={clsx(
            "w-2/3 md:w-3/4 sm:w-5/6 max-w-[780px] text-[#666666] py-5 md:py-4 sm:py-3 xs:text-white px-4 xs:w-full",
            "prose prose-lg md:prose-base sm:prose-sm prose-p:text-[#666666] prose-strong:text-[#666666] sm:prose-p:text-white sm:prose-strong:text-white",
            textAlignClass
          )}
        >
          {blok.content && (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  (renderRichText(blok.content) ?? "") as string
                ),
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
