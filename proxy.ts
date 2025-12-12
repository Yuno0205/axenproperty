import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "vi"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  // Lấy pathname (ví dụ: /careers hoặc /)
  const { pathname } = request.nextUrl;

  // Kiểm tra xem pathname có bắt đầu bằng /en hoặc /vi không
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Không làm gì cả, để request tiếp tục
  }

  // Nếu không có locale, redirect đến default locale
  // Xử lý đặc biệt cho root path "/"
  const locale = defaultLocale;
  const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  request.nextUrl.pathname = newPath;

  // Ví dụ: / -> /en, /careers -> /en/careers
  return NextResponse.redirect(request.nextUrl);
}

// Config matcher để middleware chỉ chạy khi cần thiết
export const config = {
  matcher: [
    // Bỏ qua các file (api, _next, static, favicon.ico)
    "/((?!api|_next/static|_next/image|static|favicon.ico|.*\\..*).*)",
  ],
};
