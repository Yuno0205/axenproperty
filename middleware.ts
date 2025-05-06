import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Kiểm tra nếu URL không chứa locale
  if (!pathname.startsWith("/en") && !pathname.startsWith("/vi")) {
    const locale = "en"; // Ngôn ngữ mặc định
    const redirectUrl = new URL(`/${locale}${pathname}`, req.url);

    // Chỉ chuyển hướng nếu URL hiện tại khác với URL chuyển hướng
    if (req.nextUrl.href !== redirectUrl.href) {
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}
