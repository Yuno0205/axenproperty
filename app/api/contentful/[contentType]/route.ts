import { fetchContentfulData } from "@/lib/contentful";

export async function GET(
  request: Request,
  { params }: { params: { contentType: string } }
) {
  const { contentType } = params;

  try {
    const data = await fetchContentfulData(contentType);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
