// components/Footer.js
import facebookLogo from "@/public/static/images/facebook.png";
import logo from "@/public/static/images/new/logo.png";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" py-8 mt-10">
      <div className="container px-12 flex justify-between py-16 mx-auto">
        <div className="flex w-3/5">
          <div className="flex flex-col w-1/2">
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                NEWS
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                CAREERS
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                DEVELOPERS
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                TRAVEL PROFESSIONALS
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                MI CORPORATE RESPONSIBILITY
              </span>
            </Link>
          </div>
          <div className="flex flex-col w-1/2">
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                MARRIOTT.COM
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                TERMS & CONDITIONS
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                PRIVACY POLICY
              </span>
            </Link>
            <Link href="#" className="py-4 pr-4">
              <span className="font-proximaBold text-xs pb-1 border-b-2 border-transparent hover:border-amber-500">
                MEETINGS
              </span>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex w-2/5">
          <div className="flex flex-col">
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
          </div>
          <div className="flex flex-col items-center flex-1 gap-3">
            <Image src={logo} alt="logo" className="mb-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}
