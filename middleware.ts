import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Danh sách các locale được hỗ trợ
const locales = ["en", "vi"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  // Lấy pathname từ request URL
  const pathname = request.nextUrl.pathname;

  // Kiểm tra xem URL đã có locale hay chưa
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Nếu URL không có locale, thêm locale mặc định vào URL
  if (!pathnameHasLocale) {
    // Lấy locale từ cookie hoặc header Accept-Language nếu có
    const preferredLocale =
      request.cookies.get("NEXT_LOCALE")?.value ||
      request.headers.get("Accept-Language")?.split(",")[0].split("-")[0] ||
      defaultLocale;

    // Chọn locale phù hợp từ danh sách được hỗ trợ
    const locale = locales.includes(preferredLocale)
      ? preferredLocale
      : defaultLocale;

    // Tạo URL mới với locale
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    newUrl.search = request.nextUrl.search;

    // Chuyển hướng đến URL mới
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// Áp dụng middleware chỉ cho các route sau
export const config = {
  matcher: [
    // Áp dụng cho tất cả các đường dẫn ngoại trừ các tệp tĩnh, API routes và các đường dẫn đặc biệt khác
    "/((?!api|_next/static|_next/image|favicon.ico|static).*)",
  ],
};
