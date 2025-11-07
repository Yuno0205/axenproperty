import { SbBlokData, storyblokEditable } from "@storyblok/react";
import Link from "next/link";

interface INavLinkStoryblok extends SbBlokData {
  label: string;
  link: string;
}

const NavLink = ({ blok }: { blok: INavLinkStoryblok }) => (
  <Link
    {...storyblokEditable(blok)}
    href={blok.link ?? "/"}
    className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
  >
    <span className="font-proxima text-xs font-black">{blok.label}</span>
  </Link>
);

export default NavLink;
