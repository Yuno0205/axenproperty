"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <div className="py-20 px-16">1</div>
    </div>
  );
};

export default MyCarousel;
