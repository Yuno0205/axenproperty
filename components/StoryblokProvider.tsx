"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryblokButton from "@/components/StoryBlok/Button";
import FooterLink from "@/components/StoryBlok/FooterLink";
import LinkColumn from "@/components/StoryBlok/LinkColumn";
import NavLink from "@/components/StoryBlok/NavLink";
import SocialLink from "@/components/StoryBlok/SocialLink";
import Page from "./StoryBlok/Page";
import { HeroSection } from "./HeroSection";
import Showcase from "./Showcase";
import Exploration from "./Exploration";
import Services from "./Services";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero_section: HeroSection,
    showcase: Showcase,
    exploration: Exploration,
    services: Services,
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
