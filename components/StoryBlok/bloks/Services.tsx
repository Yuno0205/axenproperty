"use client";

import { SbButton, ServicesBlok } from "@/types/storyblok";
import {
  StoryblokComponent,
  renderRichText,
  storyblokEditable,
} from "@storyblok/react";
import DOMPurify from "dompurify";
import { motion } from "motion/react";
import Image from "next/image";

const sanitizeHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  return DOMPurify.sanitize(html);
};

export default function Services({ blok }: { blok: ServicesBlok }) {
  return (
    <section {...storyblokEditable(blok)} className="w-full">
      <div className="w-full h-full pb-6">
        <div className="relative h-[375px] w-full bg-gray-100">
          <Image
            src={blok.background_image.filename}
            alt={blok.background_image.alt || blok.title}
            fill
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            sizes="100vw"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "calc(100% - 100px)" }}
          className="bg-white py-12 px-20 sm:px-5 sm:py-10 flex flex-col mx-auto items-center shadow-lg sm:text-center xs:!w-full min-h-[500px] relative z-10 -mt-20"
        >
          {blok.logo?.filename && (
            <div className="w-[206px] h-[180px] mb-5 flex items-center justify-center">
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt || blok.title}
                width={206}
                height={180}
                className="object-contain"
              />
            </div>
          )}

          <h2 className="avenir text-4xl font-light uppercase sm:text-3xl">
            {blok.title}
          </h2>

          <div
            className="pt-2.5 pb-5 prose prose-lg text-center min-h-[60px]"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml((renderRichText(blok.text) ?? "") as string),
            }}
          />

          <div className="my-5 py-3 px-10 mb-2.5 h-auto rounded-full sm:px-5 flex gap-4">
            {blok.cta_button &&
              blok.cta_button.map((buttonBlok: SbButton) => (
                <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
