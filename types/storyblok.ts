// Dành cho các object ảnh, file từ Storyblok
export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
}

export interface StoryblokBlok<T> {
  _uid: string;
  component: string;
  _editable?: string;
}
