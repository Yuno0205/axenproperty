"use client";
import React from "react";

import logo from "@/public/static/images/new/logo.png";
import Image from "next/image";

const MyCarousel: React.FC = () => {
  return (
    <div className="container w-full mx-auto h-full">
      <div className="py-20 px-16 flex flex-col items-center">
        {/* <span className="font-proximaBold mb-5 font-bold">
          Comprehensive Real Estate Services
        </span> */}
        <Image src={logo} alt="logo" className="h-40 object-contain" />
        <span className="avenir text-3xl">
          Comprehensive Real Estate Services
        </span>
        <span className="my-2.5">
          At Axen Property, we offer a full range of real estate services
          designed to meet the needs of our clients and the community
        </span>
        {/* <Button variant={"outline"} className="w-40 mt-5 ">
          <span className="font-bold text-base capitalize">Read more</span>
        </Button> */}
      </div>
    </div>
  );
};

export default MyCarousel;
