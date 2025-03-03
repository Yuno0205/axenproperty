import { NextResponse } from "next/server";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const contentType = searchParams.get("contentType") || "header";
    const locale = searchParams.get("locale") || "en-US";

    const entries = await client.getEntries({
      content_type: contentType,
      locale,
    });

    return NextResponse.json(entries.items.map((item) => item.fields));
  } catch (error) {
    console.error("❌ Error fetching data from Contentful:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
