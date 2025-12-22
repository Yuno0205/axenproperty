import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "vi"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = defaultLocale;
  const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  request.nextUrl.pathname = newPath;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|static|favicon.ico|.*\\..*).*)"],
};
