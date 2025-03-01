"use client";
import logo from "@/public/static/images/new/logo-ngang.png";
import { HeaderFields } from "@/types/contentful";
import clsx from "clsx";
import { ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";

type HeaderProps = {
  data: HeaderFields;
};

export const Header = ({ data }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Xác định locale hiện tại dựa trên URL
  const currentLocale = pathname.startsWith("/en") ? "en" : "vi";

  console.log("Current Path:", pathname);
  console.log("Current Locale:", currentLocale);

  // Mapping giữa tên ngôn ngữ hiển thị và mã ngôn ngữ thực tế
  const languageMap: Record<string, "vi" | "en"> = {
    "Tiếng Việt": "vi",
    "Tiếng Anh": "en",
    Vietnamese: "vi",
    English: "en",
  };

  // Hàm đổi ngôn ngữ
  const switchLanguage = (selectedLanguage: string) => {
    const langCode = languageMap[selectedLanguage];
    if (langCode && langCode !== currentLocale) {
      const newPath = pathname.replace(/^\/(vi|en)/, `/${langCode}`);
      router.push(newPath);
    }
  };

  return (
    <>
      <header className="w-full h-full bg-white z-50 relative sticky top-0">
        <section className="container mx-auto flex z-20 relative justify-between h-36">
          {/* Logo */}
          <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
            <div className="w-full h-full xs:w-full">
              <Link href="/" className="flex w-full h-full items-center px-4">
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
              {data?.navigation &&
                data?.navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${currentLocale}${item.url}`} // Giữ nguyên đường dẫn theo ngôn ngữ hiện tại
                    className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
                  >
                    <span className="font-proximaBold text-xs">
                      {item.label}
                    </span>
                  </Link>
                ))}
            </nav>
          </div>

          {/* Ngôn ngữ */}
          <div className="w-1/5 pl-5 flex flex-col sm:pl-2 sm:w-1/3 2xs:w-1/2 items-center">
            <div className="w-full flex items-end py-2 pr-5 items-center sm:h-full sm:pr-2 justify-center">
              <div className="flex flex-col uppercase pt-4 px-2.5">
                <span className="text-xs font-bold font-proximaBold line-clamp-1">
                  {currentLocale === "vi" ? "Chọn ngôn ngữ" : "Select language"}
                </span>
                <div className="flex">
                  <Earth size={20} className="mr-2" />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex outline-none font-proximaBold text-sm">
                      {currentLocale === "vi" ? "Tiếng Việt" : "English"}
                      <ChevronDown size={20} className="ml-1" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="p-6">
                      {data.languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang}
                          className={`font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer ${
                            languageMap[lang] === currentLocale
                              ? "text-amber-500"
                              : ""
                          }`}
                          onClick={() => switchLanguage(lang)}
                        >
                          {lang}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
