import { FooterLinkStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterLink = ({ blok }: { blok: FooterLinkStoryblok }) =>
  !blok?.link || !blok?.label ? null : (
    <Link {...storyblokEditable(blok)} href={blok.link ?? "/"}>
      {blok.label}
    </Link>
  );

export default FooterLink;
