"use client";

import { fetchContentfulData } from "@/lib/fetchContentful";
import logo from "@/public/static/images/new/logo-ngang.png";
import { HeaderFields } from "@/types/contentful";
import clsx from "clsx";
import { ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<HeaderFields>();
  const router = useRouter();
  const pathname = usePathname();

  // Lấy locale từ URL
  const currentLocale = pathname.split("/")[1] || "en";

  // Fetch dữ liệu từ Contentful khi component mount
  useEffect(() => {
    async function loadData() {
      const result = await fetchContentfulData(
        "header",
        currentLocale === "vi" ? "vi" : "en-US"
      );
      setData(result[0]); // Lấy phần tử đầu tiên từ danh sách dữ liệu
    }
    loadData();
  }, [currentLocale]);

  // Chuyển đổi ngôn ngữ
  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean); // Tách các phần của URL
    segments[0] = locale; // Thay đổi phần đầu tiên thành locale mới
    router.push(`/${segments.join("/")}`); // Điều hướng đến URL mới
  };

  return (
    <div>
      {data && (
        <>
          <header className="w-full h-full bg-white z-50 relative sticky top-0">
            <section className="container mx-auto flex z-20 relative justify-between h-36">
              {/* Logo */}
              <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
                <div className="w-full h-full xs:w-full">
                  <Link
                    href="/"
                    className="flex w-full h-full items-center px-4"
                  >
                    <Image
                      src={logo}
                      alt="logo"
                      height={154}
                      className="object-cover w-full"
                      priority
                    />
                  </Link>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex w-3/5 items-center justify-center sm:hidden px-4">
                <nav className="uppercase flex items-center text-[#575F57] justify-center sm:hidden gap-10">
                  {data.navigation &&
                    data.navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
                      >
                        <span className="font-proxima text-xs font-black">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                </nav>
              </div>
              {/* Language & Menu */}
              <div className="w-1/5 pl-5 flex flex-col sm:pl-2 sm:w-1/3 2xs:w-1/2 items-center">
                <div className="w-full flex items-end py-2 pr-5 items-center sm:h-full sm:pr-2 justify-center">
                  <div className="flex flex-col uppercase pt-4 px-2.5">
                    <span className="text-xs font-bold font-proximaBold line-clamp-1">
                      {currentLocale === "vi"
                        ? "Chọn ngôn ngữ"
                        : "Select language"}
                    </span>
                    <div className="flex">
                      <Earth size={20} className="mr-2" />
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex outline-none font-proximaBold text-sm">
                          {currentLocale === "vi" ? "Tiếng Việt" : "English"}
                          <ChevronDown size={20} className="ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="p-6">
                          {["en", "vi"].map((lang) => (
                            <DropdownMenuItem
                              key={lang}
                              className={`font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer ${
                                lang === currentLocale ? "text-amber-500" : ""
                              }`}
                              onClick={() => switchLanguage(lang)}
                            >
                              {lang === "vi" ? "Tiếng Việt" : "English"}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div
                    className="px-2 relative hidden sm:block"
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
                <div className="flex pr-5 justify-between py-2.5 items-center gap-2 sm:hidden">
                  <Button className="py-3 px-10 mb-2.5 h-auto rounded-full">
                    <span className="text-base capitalize">{data.btnText}</span>
                  </Button>
                </div>
              </div>
            </section>
          </header>
          {/* Mobile Menu */}
          <div
            style={{ backgroundColor: "rgb(28 28 28 / 90%)" }}
            className={clsx(
              "fixed bottom-0 left-0 w-full h-full z-10 p-4 flex flex-col items-center ",
              open ? "block" : "hidden"
            )}
          >
            <div className="w-full pt-32">
              <nav className="uppercase flex flex-col items-center justify-center text-[#575F57] py-5 text-center text-white">
                {data?.navigation &&
                  data?.navigation.map((item, index) => (
                    <Link key={index} href={item.url} className="pb-2.5 w-full">
                      <span className="font-proximaBold text-xs">
                        {item.label}
                      </span>
                    </Link>
                  ))}
              </nav>
              <div className="flex justify-center">
                <Button className="py-3 px-10 mb-2.5 h-auto rounded-full mt-5 ">
                  <span className="text-base capitalize">Contact axen</span>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
