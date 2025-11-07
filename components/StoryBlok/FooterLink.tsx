import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { SbBlokData } from "@storyblok/react";

interface IFooterLinkStoryblok extends SbBlokData {
  label: string;
  link: string;
}

const FooterLink = ({ blok }: { blok: IFooterLinkStoryblok }) =>
  !blok?.link || !blok?.label ? null : (
    <Link {...storyblokEditable(blok)} href={blok.link ?? "/"}>
      {blok.label}
    </Link>
  );

export default FooterLink;
