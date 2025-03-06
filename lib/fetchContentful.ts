export async function fetchContentfulData(
  contentType: string,
  locale: string = "en-US"
) {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error("Missing Contentful credentials");
  }

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentType}&locale=${locale}&include=2`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    const data = await response.json();

    console.log("Contentful Response:", data);

    if (!data.items.length) {
      console.warn(`⚠️ No data found for locale: ${locale}`);
      return [];
    }

    // ✅ Tạo Map chứa tất cả Asset từ `includes.Asset`
    const assetsMap = new Map();
    if (data.includes?.Asset) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.includes.Asset.forEach((asset: any) => {
        assetsMap.set(asset.sys.id, {
          url: `https:${asset.fields.file.url}`,
          title: asset.fields.title || "No title", // Nếu không có title thì dùng mặc định
        });
      });
    }

    // ✅ Duyệt qua từng item và thay thế asset ID thành object chứa `url` và `title`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedData = data.items.map((item: any) => {
      const fields = { ...item.fields };

      Object.keys(fields).forEach((key) => {
        if (
          fields[key]?.sys?.type === "Link" &&
          fields[key]?.sys?.linkType === "Asset"
        ) {
          // Nếu field là một Asset đơn
          fields[key] = assetsMap.get(fields[key].sys.id) || {
            url: null,
            title: "No title",
          };
        } else if (Array.isArray(fields[key])) {
          // Nếu field là danh sách Asset
          fields[key] = fields[key].map((entry) =>
            entry.sys?.type === "Link" && entry.sys?.linkType === "Asset"
              ? assetsMap.get(entry.sys.id) || { url: null, title: "No title" }
              : entry
          );
        }
      });

      return fields;
    });

    return formattedData;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error);
    return [];
  }
}
