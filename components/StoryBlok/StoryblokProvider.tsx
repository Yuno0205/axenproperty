"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import dynamic from "next/dynamic";

import StoryblokButton from "@/components/StoryBlok/ui/Button";
import FooterLink from "@/components/StoryBlok/ui/FooterLink";
import LinkColumn from "@/components/StoryBlok/ui/LinkColumn";
import NavLink from "@/components/StoryBlok/ui/NavLink";
import SocialLink from "@/components/StoryBlok/ui/SocialLink";

const Page = dynamic(() => import("./Page"));
const Exploration = dynamic(() => import("./bloks/Exploration"));
const Services = dynamic(() => import("./bloks/Services"));
const Showcase = dynamic(() => import("./bloks/Showcase"));
const JobListBlock = dynamic(() => import("./bloks/JobListBlock"));
const HiringProcess = dynamic(() => import("./bloks/HiringProcess"));
const FaqSection = dynamic(() => import("./bloks/FaqSection"));
const CoverImage = dynamic(() => import("./ui/CoverImage"));

const HeroSection = dynamic(() =>
  import("./bloks/HeroSection").then((mod) => mod.HeroSection)
);

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
    cover_image: CoverImage,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
