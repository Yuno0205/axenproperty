"use client";
import { useEffect, useState } from "react";
import MyCarousel from "../MySlider";

export const Discover = () => {
  const [, setPlayerVisible] = useState(false);

  useEffect(() => {
    setPlayerVisible(true);
  }, []);

  return (
    <div className="container mx-auto w-full">
      <MyCarousel />

      {/* <div className="py-20 px-16 flex flex-col text-white bg-[#575F57] gap-3">
        <span className="avenir text-3xl font-light">
          THE JW GARDEN BY STUDIO LILY KWONG
        </span>
        <span>
          Discover the JW Garden envisioned, designed and planted by renowned
          landscape designer and Studio Lily Kwong founder, Lily Kwong.
        </span>
        <Button className="w-40 mt-5 ">
          <span className="font-bold text-lg capitalize">Learn more</span>
        </Button>
      </div> */}
    </div>
  );
};
