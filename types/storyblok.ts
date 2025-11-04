// Minimal Storyblok block type compatible with storyblokEditable requirements
export type SbBlokData = {
  _uid: string;
  component: string;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};
export interface Asset {
  filename: string;
  alt?: string;
  title?: string;
}

export interface NavigationItem {
  label: string;
  url: string;
  _uid: string;
  component: "navigation_item";
}

export interface BannerStoryblok extends SbBlokData {
  title: string;
  backgroundImage: Asset;
  logo: Asset;
  _uid: string;
  component: "banner";
}

export interface HeaderStoryblok {
  navigation: NavigationItem[];
  languages: string[];
  btnText: string;
  _uid: string;
  component: "header";
}

export interface PropertiesStoryblok {
  title: string;
  content: string[];
  backgroundImage: Asset;
  _uid: string;
  component: "properties";
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

export interface Story<T = unknown> {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  content: T;
  created_at: string;
  published_at: string;
  first_published_at: string;
  lang: string;
}
