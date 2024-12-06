"use client";
import logo from "@/public/static/images/new/logo-ngang.png";
import { ChevronDown, Earth } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import clsx from "clsx";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full h-full bg-white z-50 relative sticky top-0">
        <section className="container mx-auto flex z-20 relative justify-between h-36">
          <div className="w-1/5 flex items-center sm:w-1/3 2xs:w-1/2 py-4">
            <div className="w-full h-full xs:w-full">
              <Link href="/" className="flex w-full h-full items-center px-4">
                <Image
                  src={logo}
                  alt="logo"
                  // width={173}
                  height={154}
                  className="object-cover w-full"
                />
              </Link>
            </div>
          </div>
          <div className="flex w-3/5 items-center justify-center sm:hidden">
            <nav className="uppercase flex items-center text-[#575F57] justify-center sm:hidden">
              <Link
                href="/"
                className="pb-2.5 border-b-2 border-transparent hover:border-amber-500"
              >
                <span className="font-proximaBold text-xs ">About axen</span>
              </Link>
              {/* <div className="ml-10 pb-2.5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex outline-none uppercase items-center">
                    <Link
                      href="/"
                      className="py-5 pr-5 font-proximaBold text-xs"
                    >
                      Nourish Your Soul
                    </Link>
                    <ChevronDown size={20} className="ml-1" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="p-6 uppercase font-proximaBold text-xs">
                    <DropdownMenuItem className="font-proximaBold text-xs pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Mindful & Present
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-proximaBold text-xs pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Nourished
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-proximaBold text-xs pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Together
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-proximaBold text-xs pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Weddings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}
              <Link
                href="/"
                className="pb-2.5 ml-10 border-b-2 border-transparent hover:border-amber-500"
              >
                <span className="font-proximaBold text-xs">Services</span>
              </Link>
              <Link
                href="/"
                className="pb-2.5 ml-10 font-proximaBold text-xs border-b-2 border-transparent hover:border-amber-500"
              >
                Properties
              </Link>
              <Link
                href="/"
                className="pb-2.5 ml-10 font-proximaBold text-xs border-b-2 border-transparent hover:border-amber-500"
              >
                News & Events
              </Link>
              <Link
                href="/careers"
                className="pb-2.5 ml-10 font-proximaBold text-xs border-b-2 border-transparent hover:border-amber-500"
              >
                Careers
              </Link>
            </nav>
          </div>
          <div className="w-1/5 pl-5 flex flex-col sm:pl-2 sm:w-1/3 2xs:w-1/2 items-center">
            <div className="w-full flex items-end py-2 pr-5 items-center sm:h-full sm:pr-2 justify-center">
              <div className="flex flex-col uppercase pt-4 px-2.5">
                <span className="text-xs font-bold font-proximaBold line-clamp-1">
                  Select language
                </span>
                <div className="flex">
                  <Earth size={20} className="mr-2" />

                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex outline-none font-proximaBold text-sm">
                      English
                      <ChevronDown size={20} className="ml-1" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="p-6">
                      <DropdownMenuItem className="font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                        English
                      </DropdownMenuItem>
                      <DropdownMenuItem className="font-proximaBold pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                        Vietnamese
                      </DropdownMenuItem>
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

              {/* <Link href="/" className="flex uppercase pt-4 px-2.5">
                <UserIcon size={20} className="mr-1" />
                <span className="text-xs font-bold font-proximaBold">
                  Sign in or join
                </span>
                <CopyIcon size={20} className="ml-1" />
              </Link> */}
            </div>
            <div className="flex pr-5 justify-between py-2.5 items-center gap-2 sm:hidden">
              <Button className="py-3 px-10 mb-2.5 h-auto rounded-full">
                <span className="text-base capitalize">Contact axen</span>
              </Button>
            </div>
          </div>
        </section>
      </header>
      <div
        style={{ backgroundColor: "rgb(28 28 28 / 90%)" }}
        className={clsx(
          "fixed bottom-0 left-0 w-full h-full z-10 p-4 flex flex-col items-center ",
          open ? "block" : "hidden"
        )}
      >
        <div className="w-full pt-32">
          <nav className="uppercase flex flex-col items-center justify-center text-[#575F57] py-5 text-center text-white">
            <Link href="/" className="py-2.5 w-full">
              <span className="font-proximaBold text-xs">About us</span>
            </Link>

            <Link href="/" className="py-2.5 w-full text-center">
              <span className=" font-proximaBold text-xs">Services</span>
            </Link>

            <Link
              href="/"
              className="py-2.5 w-full text-center font-proximaBold text-xs"
            >
              <span className=" font-proximaBold text-xs">Properties</span>
            </Link>
            <Link
              href="/"
              className="py-2.5 w-full text-center font-proximaBold text-xs"
            >
              News
            </Link>
            <Link
              href="/"
              className="py-2.5 w-full text-center font-proximaBold text-xs"
            >
              Carrer
            </Link>
          </nav>
          <div className="flex justify-center">
            <Button className="py-3 px-10 mb-2.5 h-auto rounded-full mt-5 ">
              <span className="text-base capitalize">Contact axen</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
