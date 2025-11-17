import { NavLinkStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const NavLink = ({ blok }: { blok: NavLinkStoryblok }) => (
  <Link
    {...storyblokEditable(blok)}
    href={blok.link.cached_url ?? "/"}
    prefetch
    className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
  >
    <span className="font-proxima text-xs font-black">{blok.label}</span>
  </Link>
);

export default NavLink;
