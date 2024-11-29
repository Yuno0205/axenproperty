// components/Footer.js
import logo from "@/public/static/images/new/logo.png";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/public/static/images/new/facebook.png";
import thread from "@/public/static/images/new/thread.png";
import linked from "@/public/static/images/new/linked.png";
import { Open_Sans } from "next/font/google";
import clsx from "clsx";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
export default function Footer() {
  return (
    <footer className=" py-8 mt-10 bg-white flex flex-col">
      <div className="container px-12 flex justify-between py-16 mx-auto sm:flex-wrap gap-2 ">
        {/* Leftside */}
        <div className="flex w-1/2 sm:w-full sm:flex-col justify-between">
          {/* <div className="flex flex-col sm:py-10 sm:w-full">
            <h2 className="font-bold mb-8 text-2xl font-proximaBold">
              Stay Connected
            </h2>
            <div className="flex space-x-4">
              <Link href="#">
                <InstagramLogoIcon
                  height={35}
                  width={35}
                  color="#ba7d7d"
                  className="hover:fill-amber-500"
                />
              </Link>
              <Link href="#">
                <div className="w-9 h-9 hover:filter hover:brightness-0 hover:saturate-100">
                  <Image
                    src={facebookLogo}
                    alt="Facebook"
                    width={35}
                    height={35}
                  />
                </div>
              </Link>
            </div>
          </div> */}
          <div className="flex flex-col items-center flex-1 gap-3 sm:w-full">
            <Image src={logo} alt="logo" className="mb-10" />
            <span className="uppercase">Follow Axen:</span>
            <div className="flex gap-3 items-center">
              <Link href="#">
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="#">
                <Image src={thread} alt="thread" />
              </Link>
              <Link href="#">
                <Image src={linked} alt="linked" />
              </Link>
            </div>
          </div>
        </div>
        {/* Rightside */}
        <div className={clsx(openSans.className, "flex w-1/2 sm:w-full gap-2")}>
          <div className="flex flex-col w-1/2">
            <span
              className={clsx(openSans.className, "uppercase text-[#797979]")}
            >
              AXen Careers
            </span>
            <Link href="#" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                Home
              </span>
            </Link>
            <Link href="#" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                About AXEN
              </span>
            </Link>
            <Link href="#" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                News & Event
              </span>
            </Link>
            <Link href="#" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                Careers
              </span>
            </Link>
          </div>
          <div className="flex flex-col w-1/2">
            <span className={clsx("uppercase text-[#797979]")}>MORE</span>
            <Link href="#" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                Elite Life
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#797979] max-w-[1200px] mx-auto w-full"></div>
    </footer>
  );
}
