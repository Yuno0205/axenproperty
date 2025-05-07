import { NextResponse } from "next/server";
import axios from "axios";
import { WebflowResponse } from "@/types/types";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const baseUrl = process.env.WEBFLOW_BASE_URL;
  if (!baseUrl) {
    throw new Error(
      "WEBFLOW_BASE_URL is not defined in the environment variables."
    );
  }
  const url = slug === "home" ? baseUrl : `${baseUrl}/${slug}`;

  try {
    const response = await axios.get(url);
    const html = response.data as string;
    const data: WebflowResponse = { html };
    return NextResponse.json(data);
  } catch (error: any) {
    const data: WebflowResponse = { html: "", error: "Page not found" };
    return NextResponse.json(data, { status: 404 });
  }
}
