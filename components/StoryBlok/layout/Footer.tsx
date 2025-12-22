"use client";
import { getStoryblokAssetDimensions } from "@/lib/utils";
import { GlobalConfigBlok } from "@/types/storyblok";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import Image from "next/image";

export default function Footer({ blok }: { blok: GlobalConfigBlok }) {
  const footerLogoDimensions = getStoryblokAssetDimensions(blok.logo?.filename);

  const logoWidth = footerLogoDimensions?.width ?? 200;
  const logoHeight = footerLogoDimensions?.height ?? 50;

  return (
    <footer
      {...storyblokEditable(blok)}
      className={clsx(" mt-10 bg-white flex flex-col")}
    >
      <div className="container px-6 flex flex-col justify-between py-16 mx-auto sm:flex-wrap gap-2 sm:px-2">
        <div className="flex w-full px-20 sm:px-4 gap-4 sm:flex-col">
          <div className="w-1/4 flex flex-col gap-2 text-[#606576] px-4 sm:w-full sm:px-0 sm:mb-4">
            {blok.logo?.filename && (
              <div className="relative">
                <Image
                  src={blok.logo.filename}
                  alt={blok.logo.alt || "Footer Logo"}
                  width={logoWidth}
                  height={logoHeight}
                  style={{
                    aspectRatio: `${logoWidth} / ${logoHeight}`,
                    height: "auto",
                  }}
                  className="w-full max-w-[200px]"
                  sizes="(max-width: 640px) 100vw, 200px"
                  quality={75}
                />
              </div>
            )}
            <span className="font-bold  uppercase">{blok.company_name}</span>

            <p className="whitespace-pre-line">{blok.location}</p>
            <p>
              Hotline:
              <span className="font-semibold"> {blok.hotline}</span>
            </p>
            <h5>
              Email:
              <span className="font-semibold"> {blok.email}</span>
            </h5>
          </div>

          <div className="flex-1 flex text-[#606576] sm:w-full sm:flex-col sm:gap-4">
            {blok.link_columns?.map((columnBlok) => (
              <StoryblokComponent blok={columnBlok} key={columnBlok._uid} />
            ))}
          </div>
        </div>

        {/* Line break */}
        <div className="border-t border-[#797979] max-w-[1200px] mx-auto w-full mt-10"></div>

        <div className="flex gap-2 items-center justify-between mt-4 px-20 sm:flex-col sm:gap-4 sm:px-0">
          <span className="text-[#606576]">{blok.copyright_text}</span>
          <div className="flex gap-4 sm:order-first items-center justify-center">
            {blok.social_media &&
              blok.social_media.map((socialBlok) => (
                <StoryblokComponent blok={socialBlok} key={socialBlok._uid} />
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
