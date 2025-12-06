"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryblokButton from "@/components/StoryBlok/ui/Button";
import FooterLink from "@/components/StoryBlok/ui/FooterLink";
import LinkColumn from "@/components/StoryBlok/ui/LinkColumn";
import NavLink from "@/components/StoryBlok/ui/NavLink";
import SocialLink from "@/components/StoryBlok/ui/SocialLink";
import Page from "./Page";
import { HeroSection } from "./bloks/HeroSection";

import Exploration from "./bloks/Exploration";
import Services from "./bloks/Services";
import Showcase from "./bloks/Showcase";
import JobListBlock from "./bloks/JobList";
import HiringProcess from "./bloks/HiringProcess";
import FaqSection from "./bloks/FaqSection";

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
    job_list: JobListBlock,
    hiring_process: HiringProcess,
    faq_section: FaqSection,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
