"use client";
import Image from "next/image";
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
      {hasImage && blok.image?.filename ? (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || "Cover image"}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="w-full h-full bg-slate-900" />
      )}
    </section>
  );
}
