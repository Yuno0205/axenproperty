import { Banner } from "@/components/Banner";
import Page from "@/components/Page";
import StoryblokButton from "@/components/StoryBlok/Button";
import FooterLink from "@/components/StoryBlok/FooterLink";
import LinkColumn from "@/components/StoryBlok/LinkColumn";
import NavLink from "@/components/StoryBlok/NavLink";
import SocialLink from "@/components/StoryBlok/SocialLink";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    banner: Banner,
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
