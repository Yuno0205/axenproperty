import { SocialLinkStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const SocialLink = ({ blok }: { blok: SocialLinkStoryblok }) =>
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
