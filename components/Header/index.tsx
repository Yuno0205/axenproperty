"use client";

import { HeaderFields } from "@/types/contentful";
import clsx from "clsx";
import { ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

// --- Import các thành phần UI và ảnh của bạn ---
import logo from "@/public/static/images/new/logo-ngang.png";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// --- Định nghĩa props cho component ---
interface HeaderProps {
  // Dữ liệu cho header (lấy từ Contentful)
  data: HeaderFields | null;
  // Ngôn ngữ hiện tại (lấy từ URL)
  locale: string;
}

export default function Header({ data, locale }: HeaderProps) {
  const [open, setOpen] = useState(false); // State cho mobile menu
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Chuyển đổi ngôn ngữ bằng cách thay đổi tiền tố URL.
   * Đây là cách làm đúng cho App Router.
   * @param newLocale - Mã ngôn ngữ mới (ví dụ: "en", "vi")
   */
  const switchLanguage = (newLocale: string) => {
    // Không làm gì nếu người dùng chọn lại ngôn ngữ hiện tại
    if (newLocale === locale) return;

    // Lấy đường dẫn hiện tại và xóa bỏ tiền tố ngôn ngữ cũ
    // Ví dụ: từ "/vi/careers/job-1" -> "/careers/job-1"
    const newPath = pathname.replace(`/${locale}`, "");

    // Chuyển hướng người dùng đến URL mới với tiền tố ngôn ngữ mới
    // Ví dụ: -> "/en/careers/job-1"
    router.replace(`/${newLocale}${newPath || "/"}`); // Thêm fallback "/" cho trang chủ
  };

  // Fallback an toàn: Hiển thị một header trống nếu chưa có dữ liệu
  // Giúp tránh lỗi và cải thiện trải nghiệm người dùng
  if (!data) {
    return <header className="h-36 w-full bg-white sticky top-0 z-50"></header>;
  }

  return (
    <div>
      <header className="w-full h-full bg-white z-50 relative sticky top-0">
        <section className="container mx-auto flex z-20 relative justify-between h-36">
          {/* Logo */}
          <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
            <div className="w-full h-full xs:w-full">
              <Link
                href={`/${locale}`}
                className="flex w-full h-full items-center px-4"
              >
                <Image
                  src={logo}
                  alt="Axenproperty Logo"
                  height={154}
                  className="object-cover w-full"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <div className="flex w-3/5 items-center justify-center sm:hidden px-4">
            <nav className="uppercase flex items-center text-[#575F57] justify-center sm:hidden gap-10">
              {data.navigation?.map((item, index) => (
                <Link
                  key={index}
                  href={`/${locale}${item.url}`} // Luôn thêm tiền tố locale vào link
                  className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
                  prefetch
                >
                  <span className="font-proxima text-xs font-black">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Language Selector & Actions */}
          <div className="w-1/5 pl-5 flex flex-col sm:pl-2 sm:w-1/3 2xs:w-1/2 items-center">
            <div className="w-full flex items-end py-2 pr-5 sm:h-full sm:pr-2 justify-center">
              {/* Language Dropdown */}
              <div className="flex flex-col uppercase pt-4 px-2.5">
                <span className="text-xs font-bold font-proximaBold line-clamp-1">
                  {locale === "vi" ? "Chọn ngôn ngữ" : "Select language"}
                </span>
                <div className="flex">
                  <Earth size={20} className="mr-2" />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex outline-none font-proximaBold text-sm">
                      {locale === "vi" ? "Tiếng Việt" : "English"}
                      <ChevronDown size={20} className="ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-4">
                      <DropdownMenuItem
                        className="font-proximaBold cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => switchLanguage("vi")}
                      >
                        Tiếng Việt
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="font-proximaBold cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => switchLanguage("en")}
                      >
                        English
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              {/* Mobile Menu Icon */}
              <div
                className="px-2 relative hidden sm:block cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
            {/* Contact Button (Desktop) */}
            <div className="flex pr-5 justify-between py-2.5 items-center gap-2 sm:hidden">
              <Button className="py-3 px-10 mb-2.5 h-auto rounded-full">
                <span className="text-base capitalize">{data.btnText}</span>
              </Button>
            </div>
          </div>
        </section>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{ backgroundColor: "rgb(28 28 28 / 90%)" }}
        className={clsx(
          "fixed inset-0 w-full h-full z-50 p-4 flex flex-col items-center",
          open ? "block" : "hidden"
        )}
      >
        <div className="w-full pt-32">
          <nav className="uppercase flex flex-col items-center justify-center text-white py-5 text-center">
            {data.navigation?.map((item, index) => (
              <Link
                key={index}
                href={`/${locale}${item.url}`}
                className="py-2.5 w-full text-lg"
                onClick={() => setOpen(false)} // Đóng menu khi click vào link
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center mt-5">
            <Button
              className="py-3 px-10 h-auto rounded-full"
              onClick={() => setOpen(false)} // Đóng menu khi click
            >
              <span className="text-base capitalize">{data.btnText}</span>
            </Button>
          </div>
        </div>
        {/* Nút đóng menu mobile */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
