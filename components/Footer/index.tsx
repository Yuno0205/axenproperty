// components/Footer.js
import { FooterFields } from "@/types/contentful";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

type FooterProps = {
  data: FooterFields;
};

type SocialLink = {
  href: string;
  icon: string;
};
export default function Footer({ data }: FooterProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const urls = data.social.map((item: any) => {
    return {
      href: item.fields.title,
      icon: item.fields.file.url,
    };
  });

  return (
    <footer className=" mt-10 bg-white flex flex-col">
      <div className="container px-6 flex justify-between py-16 mx-auto sm:flex-wrap gap-2 ">
        <div className="flex w-full">
          <div className="w-1/4">1</div>
          <div className="w-1/2">2</div>
          <div className="w-1/4">3</div>
        </div>
        {/* <div className="border-t border-[#797979] max-w-[1200px] mx-auto w-full"></div> */}
      </div>
    </footer>
  );
}
