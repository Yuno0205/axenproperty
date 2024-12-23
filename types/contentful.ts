import { Asset, EntrySkeletonType } from "contentful";

export type ContentfulEntry<TFields> = EntrySkeletonType & {
  fields: TFields;
};

type NavigationItem = {
  label: string;
  url: string;
};

export interface HeaderFields {
  logo: Asset;
  navigation: NavigationItem[];
  languages: string[];
  btnText: string;
}

export interface BannerFields {
  backgroundImage: Asset;
  title: string;
  logo: Asset;
}

export interface PropertiesFields {
  title: string;
  content: string[];
  backgroundImage: Asset;
}

export interface DevelopmentFields {
  title: string;
  content: string[];
  backgroundImage: Asset;
}

export interface SolutionFields {
  title: string;
  content: string[];
  backgroundImage: Asset;
}

// Sử dụng generic utility
// export type HeaderEntry = ContentfulEntry<HeaderFields>;
