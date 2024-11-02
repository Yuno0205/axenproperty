import logo from "@/public/static/images/JWM_Logo_Vertical_wRMark_4C.png";
import { ChevronDown, CopyIcon, Earth, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="w-full h-full">
      <section className="container mx-auto flex">
        <div className="w-2/5">
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-3/5 pl-5 flex flex-col">
          <div className="w-full flex items-end justify-end py-2 pr-5">
            <div className="flex flex-col uppercase pt-4 px-2.5">
              <span className="text-xs font-bold font-proximaBold">
                Select language
              </span>
              <div className="flex">
                <Earth size={20} className="mr-2" />

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex outline-none">
                    English
                    <ChevronDown size={20} className="ml-1" />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="p-6">
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Vietnamese
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Link href="/" className="flex uppercase pt-4 px-2.5">
              <UserIcon size={20} className="mr-1" />
              <span className="text-sm font-bold ">Sign in or join</span>
              <CopyIcon size={20} className="ml-1" />
            </Link>
          </div>
          <div className="flex pr-5 justify-between py-2.5 items-center">
            <nav className="uppercase flex items-center text-[#575F57]">
              <Link href="/" className="pb-2.5">
                <span className="py-5 pr-5 font-proximaBold text-xs">
                  Destinations
                </span>
              </Link>
              <div className="ml-10 pb-2.5">
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
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Mindful & Present
                    </DropdownMenuItem>
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Nourished
                    </DropdownMenuItem>
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Be Together
                    </DropdownMenuItem>
                    <DropdownMenuItem className="pt-4 pb-1 mb-2.5 bg-white border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                      Weddings
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link href="/" className="pb-2.5 ml-10 font-proximaBold text-xs">
                FAMILY BY JW™
              </Link>
            </nav>
            <Button className="py-3 px-10 mb-2.5 h-auto rounded-full">
              <span className="font-bold capitalize text-lg">Reserve Now</span>
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
};
