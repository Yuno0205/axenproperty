"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "@/public/static/images/new/logo.png";
import Image from "next/image";

const MyCarousel: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Show only one item
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Show only one item
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show only one item
    },
  };

  return (
    <div className="container w-full mx-auto h-full">
      {/* Slider */}
      <div className="w-full pt-10 h-[365px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          className="h-full object-cover"
        >
          <div
            style={{
              backgroundImage: `url(/static/images/new/church.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-[365px]"
          ></div>
        </Carousel>
      </div>
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
