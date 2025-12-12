"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import type { SbBlokData } from "@storyblok/react";
import { Asset } from "@/types/storyblok";

interface CoverImageBlok extends SbBlokData {
  image?: Asset;
}

export default function CoverImage({ blok }: { blok: CoverImageBlok }) {
  const hasImage = !!blok.image?.filename;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[350px] md:h-[300px] sm:h-[250px] bg-gray-100 overflow-hidden"
    >
      {hasImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${blok.image?.filename})` }}
        />
      ) : (
        <div className="w-full h-full bg-slate-900" />
      )}
    </section>
  );
}
