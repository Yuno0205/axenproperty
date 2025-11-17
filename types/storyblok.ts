import { SbBlokData, type StoryblokRichTextNode } from "@storyblok/react";

export interface Asset {
  alt: string;
  copyright: string;
  fieldtype: "asset";
  filename: string;
  focus: string;
  id: number;
  is_external_url: boolean;
  meta_data: {
    alt: string;
    title: string;
    source: string;
    copyright: string;
  };
  name: string;
  source: string;
  title: string;
}

export type GlobalConfigBlok = {
  //General
  logo: Asset;
  language: string;
  company_name: string;
  copyright_text: string;
  // Header
  navigation_links: NavLinkStoryblok[];
  cta_button: SbButton[];
  // Footer
  location: string;
  hotline: string;
  email: string;
  link_columns: StoryBlokLinkColumn[];
  social_links: SocialLinkStoryblok[];
};

export interface NavLinkStoryblok extends SbBlokData {
  label: string;
  link: string;
}

export interface SbButton extends SbBlokData {
  label: string;
  link: {
    url: string;
    cached_url: string;
    target: string;
  };
  padding: "default" | "sm" | "md" | "lg";
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | "secondary";
  size: "md" | "sm" | "lg";
  border_radius: "default" | "none" | "sm" | "lg" | "full";
  icon: Pick<Asset, "filename" | "alt">;
  icon_position: "left" | "right";
  background_color: string;
}

export interface FooterLinkStoryblok extends SbBlokData {
  label: string;
  link: string;
}

export interface StoryBlokLinkColumn extends SbBlokData {
  title: string;
  links: FooterLinkStoryblok[];
}

export interface SocialLinkStoryblok extends SbBlokData {
  link: string;
  icon: Pick<Asset, "filename" | "alt">;
}

export interface ShowcaseBlok extends Omit<SbBlokData, "content"> {
  component: "showcase";
  title: string;
  background_image: Asset;
  content?: StoryblokRichTextNode<string | TrustedHTML>;
  text_alignment?: "left" | "center" | "right";
  background_position?: "center" | "top" | "bottom";
}

export interface DevelopmentStoryblok {
  title: string;
  text: string;
  btnText: string;
  backgroundImage: Asset;
  _uid: string;
  component: "development";
}

export interface SolutionStoryblok {
  title: string;
  text: string[];
  btnText: string;
  backgroundImage: Asset;
  logo: Asset;
  _uid: string;
  component: "solution";
}

export interface FooterStoryblok {
  logo: Asset;
  companyName: string;
  location: string;
  hotline: string[];
  email: string;
  social: { title: string; url: string }[];
  _uid: string;
  component: "footer";
}
