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
      <div className="w-full relative py-10 md:py-8 sm:py-6 xs:py-5 2xs:py-4">
        <div className="w-full h-[365px] md:h-[320px] sm:h-[280px] xs:h-[240px] 2xs:h-[200px] relative">
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
            "w-2/5 md:w-1/2 sm:w-5/6 xs:w-[90%] 2xs:w-full px-4 xs:px-2",
            isCardLeft
              ? "ml-12 md:ml-8 sm:mx-auto xs:mx-auto"
              : "mr-12 md:mr-8 ml-auto sm:mx-auto xs:mx-auto"
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
            className="mt-[-300px] md:mt-[-250px] sm:mt-[-80px] xs:mt-[-60px] 2xs:mt-0 h-[365px] md:h-[320px] sm:h-auto xs:h-auto 2xs:h-auto min-h-[365px] md:min-h-[320px] sm:min-h-[280px] xs:min-h-[250px] 2xs:min-h-[220px] px-16 md:px-12 sm:px-8 xs:px-6 2xs:px-4 py-12 md:py-10 sm:py-8 xs:py-6 2xs:py-5 bg-white w-full flex flex-col justify-center shadow-lg z-2 relative sm:text-center"
          >
            <h2 className="avenir text-3xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-base font-medium uppercase">
              {blok.title}
            </h2>
            <span className="my-2.5 md:my-2 sm:my-2 xs:my-1.5 2xs:my-1 text-sm md:text-sm sm:text-sm xs:text-xs 2xs:text-xs">
              {blok.text}
            </span>

            {/* Render block button */}
            <div className="w-40 md:w-36 sm:w-full xs:w-full 2xs:w-full my-5 md:my-4 sm:my-4 xs:my-3 2xs:my-2 py-3 md:py-2.5 sm:py-2 xs:py-2 2xs:py-1.5 mb-2.5 md:mb-2 sm:mb-2 xs:mb-1.5 2xs:mb-1 h-auto">
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
