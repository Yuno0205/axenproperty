import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  let locale = req.cookies.get("NEXT_LOCALE")?.value || "en";
  req.nextUrl.searchParams.set("locale", locale);
  return NextResponse.rewrite(req.nextUrl);
}
