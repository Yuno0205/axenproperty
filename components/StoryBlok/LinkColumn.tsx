"use client";

import { FooterLinkStoryblok, StoryBlokLinkColumn } from "@/types/storyblok";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const LinkColumn = ({ blok }: { blok: StoryBlokLinkColumn }) => (
  <div {...storyblokEditable(blok)} className="w-1/3 sm:w-full">
    <div className="flex flex-col gap-4">
      <p className="font-bold text-lg">{blok.title}</p>
      {blok.links &&
        blok.links.map((linkBlok: FooterLinkStoryblok) => (
          <StoryblokComponent blok={linkBlok} key={linkBlok._uid} />
        ))}
    </div>
  </div>
);

export default LinkColumn;
