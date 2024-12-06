import { Asset, EntrySkeletonType } from "contentful";

export type ContentfulEntry<TFields> = EntrySkeletonType & {
  fields: TFields;
};

export interface HeaderFields {
  logo: Asset;
  navigation: string[];
  languages: string[];
  btnText: string;
}

// Sử dụng generic utility
export type HeaderEntry = ContentfulEntry<HeaderFields>;
