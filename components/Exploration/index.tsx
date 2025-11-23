"use client";

import { ExplorationBlok, SbButton } from "@/types/storyblok";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Exploration({ blok }: { blok: ExplorationBlok }) {
  const ref = useRef(null);

  const isCardLeft = blok.card_position === "right" ? false : true;

  return (
    <section {...storyblokEditable(blok)} className="w-full h-full">
      <div className="w-full relative py-10">
        <div className="w-full h-[365px] relative">
          {blok.background_image?.filename && (
            <Image
              src={blok.background_image.filename}
              alt={blok.background_image.alt || blok.title}
              fill
              className="w-full object-cover h-full"
              priority
              quality={100}
            />
          )}
        </div>
        <div
          className={clsx(
            "w-2/5 sm:w-full px-4",
            isCardLeft ? "ml-12 sm:mx-auto" : "mr-12 ml-auto sm:mx-auto"
          )}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isCardLeft ? -300 : 300, y: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mt-[-300px] sm:mt-[-50px] h-[365px] px-16 py-12 bg-white w-full flex flex-col justify-center shadow-lg z-2 relative xs:text-center"
          >
            <h2 className="avenir text-3xl font-light uppercase">
              {blok.title}
            </h2>
            <span className="my-2.5">{blok.text}</span>

            {/* Render block button */}
            <div className="w-40 my-5 py-3 mb-2.5 h-auto">
              {blok.cta_button &&
                blok.cta_button.map((buttonBlok: SbButton) => (
                  <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
