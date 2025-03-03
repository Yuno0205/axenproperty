import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function fetchContentfulData<T extends EntrySkeletonType>(
  contentType: string,
  locale: string = "en-US" // 🔹 Mặc định là English
): Promise<EntryCollection<T>> {
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
      locale, // Fetch dữ liệu theo locale từ URL
    });

    if (!entries.items.length) {
      console.warn(`⚠️ No entries found for content type: ${contentType}`);
      return entries;
    }

    return entries;
  } catch (error) {
    console.error(`❌ Error fetching content type "${contentType}":`, error);
    throw error;
  }
}
