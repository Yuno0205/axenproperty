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
            <Image
              src={`https:${data?.logo?.fields?.file?.url}`}
              alt="logo"
              width={300}
              height={265}
              className="mb-10"
            />
            <span className="uppercase">{data.titleList[0]}</span>
            <div className="flex gap-3 items-center">
              {urls.map((url: SocialLink, index: number) => (
                <Link
                  href={url.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https:${url.icon}`}
                    alt="facebook"
                    width={35}
                    height={35}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Rightside */}
        <div
          className={clsx(
            openSans.className,
            "flex w-1/2 sm:w-full gap-2 mt-10"
          )}
        >
          <div className="flex flex-col w-1/2">
            <span
              className={clsx(openSans.className, "uppercase text-[#797979]")}
            >
              Axen Careers
            </span>
            <Link href="/" className="py-3 pr-4">
              <span className=" border-b-2 border-transparent hover:border-amber-500">
                Home
              </span>
            </Link>
            {data.navLinks.map((item, index) => (
              <Link key={index} href={item.url} className="py-3 pr-4">
                <span className=" border-b-2 border-transparent hover:border-amber-500">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col w-1/2">
            <span className={clsx("uppercase text-[#797979]")}>
              {data.titleList[2]}
            </span>
            <Link
              href="https://elitelife.axenproperty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 pr-4"
            >
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
