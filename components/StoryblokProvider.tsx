"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryblokButton from "@/components/StoryBlok/Button";
import FooterLink from "@/components/StoryBlok/FooterLink";
import LinkColumn from "@/components/StoryBlok/LinkColumn";
import NavLink from "@/components/StoryBlok/NavLink";
import SocialLink from "@/components/StoryBlok/SocialLink";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    nav_link: NavLink,
    button: StoryblokButton,
    link_column: LinkColumn,
    footer_link: FooterLink,
    social_link: SocialLink,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
