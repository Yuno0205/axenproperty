import { StoryblokServerComponent } from "@storyblok/react/rsc";
import type { SbBlokData } from "@storyblok/react";

type PageBlok = SbBlokData & { body?: SbBlokData[] };

export default function Page({
  blok,
  ...props
}: {
  blok: PageBlok;
} & Record<string, unknown>) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          {...props}
        />
      ))}
    </main>
  );
}
