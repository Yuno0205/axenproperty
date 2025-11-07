import { Asset } from "@/types/storyblok";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

interface ISocialLinkStoryblok extends SbBlokData {
  link: string;
  icon: Pick<Asset, "filename" | "alt">;
}

const SocialLink = ({ blok }: { blok: ISocialLinkStoryblok }) =>
  !blok?.link || !blok?.icon?.filename ? null : (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link ?? "/"}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={blok.icon.filename}
        alt={blok.icon.alt || "social icon"}
        width={30}
        height={30}
      />
    </Link>
  );

export default SocialLink;
