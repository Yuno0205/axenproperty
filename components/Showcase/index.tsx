"use client";

import { ShowcaseBlok } from "@/types/storyblok";
import { renderRichText, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { motion } from "framer-motion";
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
      className="aspect-video bg-cover text-center bg-no-repeat w-full relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full h-full relative min-h-[300px]"
      >
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt || blok.title}
          fill
          className={clsx("object-cover z-0", objectPositionClass)}
          quality={75}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className={clsx(
          "w-full pt-20 xs:pt-10 px-10 xs:px-4 z-10 absolute top-0 left-0",
          textAlignClass
        )}
      >
        <h2
          className={clsx(
            poppins.className,
            "text-6xl font-bold text-[#666666] xs:text-4xl xs:text-white"
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
            "w-2/3 max-w-[780px] text-[#666666] py-5 xs:text-white px-4 xs:w-full",
            "prose prose-lg prose-p:text-[#666666] prose-strong:text-[#666666] xs:prose-p:text-white xs:prose-strong:text-white",
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
