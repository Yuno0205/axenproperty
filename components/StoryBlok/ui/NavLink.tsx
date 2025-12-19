import { NavLinkStoryblok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const NavLink = ({ blok }: { blok: NavLinkStoryblok }) => {
  let href = blok.link.cached_url || "/";

  if (
    href &&
    !href.startsWith("/") &&
    !href.startsWith("http") &&
    !href.startsWith("mailto") &&
    !href.startsWith("tel")
  ) {
    href = `/${href}`;
  }

  if (href.endsWith("/home")) {
    href = href.replace("/home", "");
  }

  if (href === "") {
    href = "/";
  }

  if (href.length > 1 && href.endsWith("/")) {
    href = href.slice(0, -1);
  }

  return (
    <Link
      {...storyblokEditable(blok)}
      href={href}
      prefetch
      className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
    >
      <span className="font-proxima text-xs font-semibold">{blok.label}</span>
    </Link>
  );
};

export default NavLink;
