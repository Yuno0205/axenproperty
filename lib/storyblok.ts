import Page from "@/components/StoryBlok/Page";
import StoryblokButton from "@/components/StoryBlok/ui/Button";
import FooterLink from "@/components/StoryBlok/ui/FooterLink";
import LinkColumn from "@/components/StoryBlok/ui/LinkColumn";
import NavLink from "@/components/StoryBlok/ui/NavLink";
import SocialLink from "@/components/StoryBlok/ui/SocialLink";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { HeroSection } from "@/components/StoryBlok/bloks/HeroSection";
import Showcase from "@/components/Showcase";
import Exploration from "@/components/StoryBlok/bloks/Exploration";
import Services from "@/components/StoryBlok/bloks/Services";

export const getStoryblokApi = storyblokInit({
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
  apiOptions: {
    region: "eu",
  },
});
