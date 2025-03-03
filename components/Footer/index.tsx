// components/Footer.js
import { FooterFields } from "@/types/contentful";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type FooterProps = {
  data: FooterFields;
};

// type SocialLink = {
//   href: string;
//   icon: string;
// };
export default function Footer({ data }: FooterProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const urls = data.social.map((item: any) => {
  //   return {
  //     href: item.fields.title,
  //     icon: item.fields.file.url,
  //   };
  // });

  return (
    data && (
      <footer
        className={clsx(inter.className, " mt-10 bg-white flex flex-col")}
      >
        <div className="container px-6 flex flex-col justify-between py-16 mx-auto sm:flex-wrap gap-2 ">
          <div className="flex w-full px-20">
            <div className="w-1/4 flex flex-col gap-2 text-[#606576] px-4">
              <div className="relative">
                <Image
                  src={`https:${data?.logo?.fields?.file?.url}`}
                  alt="logo"
                  width={200}
                  height={160}
                  // className="mb-10"
                />
              </div>
              <span className="font-bold  uppercase">
                CÔNG TY TNHH Axen Property
              </span>
              <span>
                Số 3 đường số 4, Khu dân cư Himlam, Quận 7, Ho Chi Minh City,
                Vietnam
              </span>
              <h5>
                Hotline:
                <span className="font-semibold"> 0963 509 060</span> or{" "}
                <span className="font-semibold">0961 706 960</span>
              </h5>
              <h5>
                Email:
                <span className="font-semibold"> People@axenproperty.com</span>
              </h5>
            </div>
            <div className="w-1/2 flex text-[#606576]">
              <div className="w-1/3">
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">Về chúng tôi</p>
                  <Link href={""}>Đội ngũ Axenproperty</Link>
                  <Link href={""}>Sứ mệnh</Link>
                  <Link href={""}>Tuyển dụngg</Link>
                  <Link href={""}>Hỗ trợ</Link>
                </div>
              </div>
              <div className="w-1/3">
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">Sản phẩm</p>
                  <Link href={""}>Chung cư</Link>
                  <Link href={""}>Bất động sản</Link>
                  <Link href={""}>Tích lũy</Link>
                </div>
              </div>
              <div className="w-1/3">
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-lg">Tin tức</p>
                  <Link href={""}>Kiến thức</Link>
                  <Link href={""}>Blog</Link>
                  <Link href={""}>Sự kiện</Link>
                </div>
              </div>
            </div>
            <div className="w-1/4 text-[#606576]">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg">Chính sách</p>
                <Link href={""}>Bảo mật & chia sẻ thông tin</Link>
                <Link href={""}>Hợp đồng điện tử</Link>
                <Link href={""}>Nguyên tắc tính năng cộng đồng</Link>
                <Link href={""}>Điều khoản - Điều kiện</Link>
              </div>
            </div>
          </div>
          {/* Cái này là line break */}
          <div className="border-t border-[#797979] max-w-[1200px] mx-auto w-full mt-10"></div>

          <div className="flex gap-2 items-center justify-between mt-4 px-20">
            <span className="text-[#606576]">© 2025 Axen Property</span>
            <div className="flex gap-2">
              {/* {urls.map((item: SocialLink, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={item.icon} alt="social" width={24} height={24} />
                </a>
              ))} */}
              1
            </div>
          </div>
        </div>
      </footer>
    )
  );
}
