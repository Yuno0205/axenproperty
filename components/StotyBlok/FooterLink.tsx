import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterLink = ({ blok }: { blok: any }) => (
  <Link {...storyblokEditable(blok)} href={blok.link.cached_url || "/"}>
    {blok.label}
  </Link>
);

export default FooterLink;
