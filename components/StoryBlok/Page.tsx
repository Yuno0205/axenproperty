import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { SbBlokData } from "@storyblok/react";

type PageBlok = SbBlokData & { body?: SbBlokData[] };

export default function Page({ blok }: { blok: PageBlok }) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
