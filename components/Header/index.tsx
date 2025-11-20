"use client";

import logo from "@/public/static/images/new/logo-ngang.png";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import hooks for routing
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GlobalConfigBlok } from "@/types/storyblok";

export default function Header({ blok }: { blok: GlobalConfigBlok }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Determine current language based on the URL path (e.g., /en/... or /vi/...)
  // Default to 'en' if not found or on root
  const currentLang = pathname?.split("/")[1] === "vi" ? "vi" : "en";

  // Function to handle language switching
  const switchLanguage = (langCode: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    // segments[0] is empty, segments[1] is the locale
    if (segments[1] === "en" || segments[1] === "vi") {
      segments[1] = langCode; // Replace existing locale
    } else {
      segments.splice(1, 0, langCode); // Insert locale if missing
    }

    const newPath = segments.join("/");
    router.push(newPath); // Navigate to the new path
  };

  return (
    <div {...storyblokEditable(blok)}>
      <header className="w-full h-full bg-white z-50 relative sticky top-0">
        <section className="container mx-auto flex z-20 relative justify-between h-36">
          {/* Logo Section */}
          <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
            <div className="w-full h-full xs:w-full">
              <Link
                href="/"
                className="flex w-full h-full items-center px-4 justify-center"
              >
                <Image
                  src={blok?.logo?.filename || logo}
                  alt={blok?.logo?.alt || "Axenproperty Logo"}
                  width={173}
                  height={154}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex w-3/5 items-center justify-center sm:hidden px-4">
            <nav className="uppercase flex items-center text-[#575F57] justify-center sm:hidden gap-10">
              {blok.navigation_links &&
                blok.navigation_links.map((navItem) => (
                  <StoryblokComponent blok={navItem} key={navItem._uid} />
                ))}
            </nav>
          </div>

          {/* Language Switcher & Mobile Menu Trigger */}
          <div className="w-1/5 pl-5 flex flex-col sm:pl-2 sm:w-1/3 2xs:w-1/2 items-center">
            <div className="w-full flex items-end py-2 pr-5 items-center sm:h-full sm:pr-2 justify-center">
              <div className="flex flex-col uppercase pt-4 px-2.5">
                <span className="text-xs font-bold font-proximaBold line-clamp-1">
                  {currentLang === "vi" ? "Chọn ngôn ngữ" : "Select language"}
                </span>
                <div className="flex">
                  <Earth size={20} className="mr-2" />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex outline-none font-proximaBold text-sm uppercase">
                      {currentLang === "vi" ? "Tiếng Việt" : "English"}
                      <ChevronDown size={20} className="ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-6">
                      <DropdownMenuItem
                        className={clsx(
                          "font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer",
                          currentLang === "en" && "text-amber-500"
                        )}
                        onClick={() => switchLanguage("en")}
                      >
                        English
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={clsx(
                          "font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer",
                          currentLang === "vi" && "text-amber-500"
                        )}
                        onClick={() => switchLanguage("vi")}
                      >
                        Tiếng Việt
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Mobile Menu Toggle Button */}
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

            {/* CTA Button (Desktop/Tablet) */}
            <div className="flex pr-5 justify-between py-2.5 items-center gap-2 sm:hidden">
              {blok.cta_button &&
                blok.cta_button.map((buttonBlok) => (
                  <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
                ))}
            </div>
          </div>
        </section>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{ backgroundColor: "rgb(28 28 28 / 90%)" }}
        className={clsx(
          "fixed bottom-0 left-0 w-full h-full z-50 p-4 flex flex-col items-center transition-opacity duration-300",
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Close Button for Mobile Menu (Optional but recommended) */}
        <div
          className="absolute top-5 right-5 text-white cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="w-full pt-32">
          <nav className="uppercase flex flex-col items-center justify-center text-white py-5 text-center">
            {blok.navigation_links &&
              blok.navigation_links.map((navItem) => (
                <div
                  key={navItem._uid}
                  className="py-2"
                  onClick={() => setOpen(false)}
                >
                  <StoryblokComponent blok={navItem} />
                </div>
              ))}
          </nav>
          <div
            className="flex justify-center mt-5"
            onClick={() => setOpen(false)}
          >
            {blok.cta_button &&
              blok.cta_button.map((buttonBlok) => (
                <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
