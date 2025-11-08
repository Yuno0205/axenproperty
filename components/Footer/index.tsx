"use client";

import { GlobalConfigBlok } from "@/types/storyblok";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Footer({ blok }: { blok: GlobalConfigBlok }) {
  return (
    <footer className={clsx(inter.className, " mt-10 bg-white flex flex-col")}>
      <div className="container px-6 flex flex-col justify-between py-16 mx-auto sm:flex-wrap gap-2 sm:px-2">
        <div className="flex w-full px-20 sm:px-4 gap-4 sm:flex-col">
          <div className="w-1/4 flex flex-col gap-2 text-[#606576] px-4 sm:w-full sm:px-0 sm:mb-4">
            <div className="relative">
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt}
                width={200}
                height={160}
              />
            </div>
            <span className="font-bold  uppercase">{blok.company_name}</span>

            <span>{blok.location}</span>
            <h5>
              Hotline:
              <span className="font-semibold"> {blok.hotline}</span>
            </h5>
            <h5>
              Email:
              <span className="font-semibold"> {blok.email}</span>
            </h5>
          </div>
          <div className="w-1/2 flex text-[#606576] sm:w-full sm:flex-col sm:gap-4">
            <div className="w-1/3 sm:w-full">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg">About us</p>
                <Link href={"/"}>Axenproperty team</Link>
                <Link href={"/"}>Mission</Link>
                <Link href={"/careers"}>Careers</Link>
                <Link href={"/"}>Support</Link>
              </div>
            </div>
            <div className="w-1/3 sm:w-full">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg">Products</p>
                <Link href={"/"}>Apartments</Link>
                <Link href={"/"}>Real estate</Link>
                <Link href={"/"}>Savings</Link>
              </div>
            </div>
            <div className="w-1/3 sm:w-full">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg">News</p>
                <Link href={"/"}>Knowledge</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Events</Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 text-[#606576] sm:w-full">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-lg">Policies</p>
              <Link href={"/"}>Privacy & information sharing</Link>
              <Link href={"/"}>Electronic contracts</Link>
              <Link href={"/"}>Community feature principles</Link>
              <Link href={"/"}>Terms & Conditions</Link>
            </div>
          </div>
        </div>
        {/* Cái này là line break */}
        <div className="border-t border-[#797979] max-w-[1200px] mx-auto w-full mt-10"></div>

        <div className="flex gap-2 items-center justify-between mt-4 px-20 sm:flex-col sm:gap-4 sm:px-0">
          <span className="text-[#606576]">{blok.copyright_text}</span>
          <div className="flex gap-4 sm:order-first">
            {/* {blok.social_links.map(
              (item: SocialLinkStoryblok, index: number) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={item.icon.filename}
                    alt={item.icon.alt}
                    width={30}
                    height={30}
                  />
                </Link>
              )
            )} */}
          </div>
        </div>
      </div>
    </footer>
  );
}
