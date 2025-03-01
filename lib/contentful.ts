import { createClient, EntryCollection, EntrySkeletonType } from "contentful";

// Khởi tạo Contentful client
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Hàm lấy dữ liệu từ Contentful, hỗ trợ contentType & locale
export async function fetchContentfulData<T extends EntrySkeletonType>(
  contentType: string,
  locale: string = "en-US"
): Promise<EntryCollection<T>> {
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType,
      locale, // Hỗ trợ đa ngôn ngữ
    });

    if (!entries.items.length) {
      console.warn(`⚠️ No entries found for content type: ${contentType}`);
      return entries; // Trả về object rỗng thay vì throw error
    }

    return entries;
  } catch (error) {
    console.error(`❌ Error fetching content type "${contentType}":`, error);
    throw error;
  }
}
