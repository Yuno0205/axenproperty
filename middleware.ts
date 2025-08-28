// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "vi"];
const defaultLocale = "vi";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch (error) {
    console.log(error);
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Bỏ qua các đường dẫn cho file tĩnh, api...
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "/sitemap.xml",
      // Thêm các file tĩnh khác nếu có
    ].includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static")
  ) {
    return;
  }

  // Kiểm tra xem URL đã có tiền tố ngôn ngữ hay chưa
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Nếu chưa có, chuyển hướng đến URL có ngôn ngữ
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: [
    // Bỏ qua tất cả các đường dẫn nội bộ và file tĩnh
    "/((?!api|_next/static|_next/image|favicon.ico|static).*)",
  ],
};
