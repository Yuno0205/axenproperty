import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const baseUrl = process.env.WEBFLOW_BASE_URL;
  const url = slug === "home" ? baseUrl : `${baseUrl}/${slug}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        Accept: "text/html",
      },
    });

    return NextResponse.json({ html: response.data });
  } catch (error: any) {
    console.error(`Error fetching Webflow page: ${url}`, error.message);
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }
}
