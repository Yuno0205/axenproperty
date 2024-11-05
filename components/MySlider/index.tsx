"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../ui/button";

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
              backgroundImage: `url(/static/images/jw-jwmarriott-highres-14-15466.jpg)`,
              backgroundPosition: "49.54% 62.06%",
              backgroundSize: "cover",
            }}
            className="w-full h-[365px]"
          ></div>
        </Carousel>
      </div>
      <div className="py-20 px-16 flex flex-col">
        <span className="font-proximaBold mb-5 font-bold">
          An Escape For Your Senses
        </span>
        <span className="avenir text-3xl">JW MARRIOTT X FLAMINGO ESTATE</span>
        <span className="my-2.5">
          JW Marriott and Flamingo Estate seamlessly entwine luxury hospitality
          and elevated lifestyle experiences to create a journey exploring
          scent, sound, and taste.
        </span>
        <Button variant={"outline"} className="w-40 mt-5 ">
          <span className="font-bold text-base capitalize">Read more</span>
        </Button>
      </div>
    </div>
  );
};

export default MyCarousel;
