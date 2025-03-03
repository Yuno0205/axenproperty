"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import logo from "@/public/static/images/new/logo-ngang.png";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Earth } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { fetchContentfulData } from "@/lib/fetchContentful"; // Import hàm fetch mới

export default function Header() {
  const [data, setData] = useState<{
    navigation: { url: string; label: string }[];
    languages: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Lấy locale từ URL, mặc định là "en"
  const currentLocale = searchParams.get("locale") || "en";

  // Fetch dữ liệu từ Contentful khi component mount
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const result = await fetchContentfulData(
        "header",
        currentLocale === "vi" ? "vi" : "en-US"
      );
      setData(result[0]); // Lấy phần tử đầu tiên từ danh sách dữ liệu
      setLoading(false);
    }
    loadData();
  }, [currentLocale]);

  // Mapping giữa tên ngôn ngữ hiển thị và mã ngôn ngữ thực tế
  const languageMap: Record<string, "vi" | "en"> = {
    "Tiếng Việt": "vi",
    "Tiếng Anh": "en",
    Vietnamese: "vi",
    English: "en",
  };

  // Chuyển đổi ngôn ngữ bằng cách cập nhật query param ?locale=
  const switchLanguage = (selectedLanguage: string) => {
    const langCode = languageMap[selectedLanguage];
    if (langCode && langCode !== currentLocale) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("locale", langCode);
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No header data found.</p>;

  return (
    <header className="w-full h-full bg-white z-50 relative sticky top-0">
      <section className="container mx-auto flex z-20 relative justify-between h-36">
        {/* Logo */}
        <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
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

        {/* Navigation */}
        <div className="flex w-3/5 items-center justify-center sm:hidden px-4">
          <nav className="uppercase flex items-center text-[#575F57] justify-center sm:hidden gap-10">
            {data.navigation.map((item, index) => (
              <Link
                key={index}
                href={`${item.url}?locale=${currentLocale}`}
                className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
              >
                <span className="font-proximaBold text-xs">{item.label}</span>
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
  );
}
