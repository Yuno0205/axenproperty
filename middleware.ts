import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "vi"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  // Lấy pathname (ví dụ: /careers)
  const { pathname } = request.nextUrl;

  // Kiểm tra xem pathname có bắt đầu bằng /en hoặc /vi không
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Không làm gì cả, để request tiếp tục
  }

  // Nếu không có locale, redirect
  // (Chúng ta có thể làm thông minh hơn bằng cách check 'Accept-Language' hoặc cookie)
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Ví dụ: /careers -> /en/careers
  return NextResponse.redirect(request.nextUrl);
}

// Config matcher để middleware chỉ chạy khi cần thiết
export const config = {
  matcher: [
    // Bỏ qua các file (api, _next, static, favicon.ico)
    "/((?!api|_next/static|_next/image|static|favicon.ico|.*\\..*).*)",
  ],
};
