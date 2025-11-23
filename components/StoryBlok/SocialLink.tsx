"use client";

import { SocialLinkStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function SocialLink({ blok }: { blok: SocialLinkStoryblok }) {
  const isExternal = blok.link.linktype === "url";

  const href = blok.link.cached_url || "/";

  return (
    <Link
      {...storyblokEditable(blok)}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
    >
      <Image
        src={blok.icon.filename}
        alt={blok.icon.alt || "Social Icon"}
        width={36}
        height={36}
      />
    </Link>
  );
}
