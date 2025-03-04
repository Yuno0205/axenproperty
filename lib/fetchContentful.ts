export async function fetchContentfulData(
  contentType: string,
  locale: string = "en-US"
) {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  console.log("Fetching Contentful Data:");
  console.log("Space ID:", spaceId);
  console.log("Access Token:", accessToken);
  console.log("Locale:", locale);

  if (!spaceId || !accessToken) {
    throw new Error("Missing Contentful credentials");
  }

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentType}&locale=${locale}`;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    const data = await response.json();

    console.log("Contentful Response:", data);

    if (!data.items.length) {
      console.warn(`⚠️ No data found for locale: ${locale}`);
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.items.map((item: any) => item.fields);
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error);
    return [];
  }
}
