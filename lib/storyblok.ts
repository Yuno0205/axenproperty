import { Banner } from "@/components/Banner";
import Page from "@/components/Page";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    banner: Banner,
  },
  apiOptions: {
    region: "eu",
  },
});
