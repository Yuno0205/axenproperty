import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const secret = searchParams.get("secret");

  if (secret !== process.env.STORYBLOK_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  // Validate slug is a relative path without ".." or absolute URLs
  const sanitizedSlug = slug?.replace(/^\/+/, "").replace(/\.\.+/g, "") || "";

  // Ensure it's not an absolute URL
  if (
    sanitizedSlug.startsWith("http://") ||
    sanitizedSlug.startsWith("https://")
  ) {
    return new Response("Invalid slug", { status: 400 });
  }

  redirect(`/${sanitizedSlug}`);
}
