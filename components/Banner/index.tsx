import Image from "next/image";
import Link from "next/link";
import logo from "@/public/static/images/new/logo.png";

export const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: "url('/static/images/new/banner.jpg')",
          }}
          className="w-full h-[450px] relative bg-cover bg-no-repeat flex items-center justify-center bg-center py-5 2xs:h-96"
        >
          <div
            style={{
              // width: "calc(100% - 400px)",
              // height: "calc(100% - 50px)",
              opacity: 0.85,
            }}
            className="h-full w-5/6 bg-[#F2F3F5D9] flex flex-col items-center justify-center text-center gap-5"
          >
            <div className="w-72 xs:w-52">
              <Link
                href="/"
                className="flex w-full h-full items-center px-4 relative z-2"
              >
                <Image
                  src={logo}
                  alt="logo"
                  // width={173}

                  className="object-cover w-full"
                />
              </Link>
            </div>
            <div className="avenir text-[#666666] w-full text-5xl flex flex-col font-light capitalize sm:text-4xl px-4 pt-10 2xs:pt-0">
              <span> Delivering professional Real estate solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
