import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const fetchContentfulData = async <T extends EntrySkeletonType>(
  contentType: string
): Promise<EntryCollection<T>> => {
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
    });

    if (!entries.items.length) {
      throw new Error(`No entries found for content type: ${contentType}`);
    }

    return entries;
  } catch (error) {
    console.error(`Error fetching content type "${contentType}":`, error);
    throw error;
  }
};
