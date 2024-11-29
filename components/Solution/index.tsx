import Image from "next/image";
import logo from "@/public/static/images/new/logo.png";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";

export const Solutions = () => {
  return (
    <section className="w-full">
      {/* Horizontal */}
      <div className="w-full h-full pb-6">
        <div
          style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
          className="bg-[url('/static/images/new/projects.jpg')] h-[375px] w-full relative"
        ></div>
        <div
          style={{ width: "calc(100% - 100px)" }}
          className=" bg-white py-12 px-20 sm:px-5 sm:py-10 flex flex-col mx-auto items-center shadow-lg sm:text-center"
        >
          <div className="p-4 mb-5">
            <Image
              src={logo}
              alt="logo"
              height={180}
              className="object-contain"
            />
          </div>
          <span className="avenir text-4xl font-light uppercase sm:text-3xl">
            DELIVERING PROFESSIONAL REAL ESTATE SOLUTIONS
          </span>
          <span className="pt-2.5 pb-5">
            <span className="font-bold">AXEN Property</span> delivers innovative
            and professional real estate solutions, enhancing property value for
            investors and living spaces for customers.
          </span>
          <Button className=" my-5">
            <span className="text-lg capitalize">Contact Axen</span>
            <CopyIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};
