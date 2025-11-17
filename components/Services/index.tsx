"use client";

import { SbButton, ServicesBlok } from "@/types/storyblok";
import {
  StoryblokComponent,
  renderRichText,
  storyblokEditable,
} from "@storyblok/react";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const sanitizeHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  return DOMPurify.sanitize(html);
};

export default function Services({ blok }: { blok: ServicesBlok }) {
  if (!blok?.title) return <Skeleton height={300} />;

  return (
    <section {...storyblokEditable(blok)} className="w-full">
      <div className="w-full h-full pb-6">
        <div
          style={{
            backgroundImage: `url(${blok.background_image?.filename})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
          className="h-[375px] w-full relative"
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{ width: "calc(100% - 100px)" }}
          className="bg-white py-12 px-20 sm:px-5 sm:py-10 flex flex-col mx-auto items-center shadow-lg sm:text-center xs:!w-full"
        >
          {blok.logo?.filename && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="p-4 mb-5"
            >
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt || blok.title}
                width={206}
                height={180}
                className="object-contain"
              />
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="avenir text-4xl font-light uppercase sm:text-3xl"
          >
            {blok.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="pt-2.5 pb-5 prose prose-lg"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml((renderRichText(blok.text) ?? "") as string),
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="my-5 py-3 px-10 mb-2.5 h-auto rounded-full sm:px-5"
          >
            {/* Render block button */}
            {blok.cta_button &&
              blok.cta_button.map((buttonBlok: SbButton) => (
                <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
