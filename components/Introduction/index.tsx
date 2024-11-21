"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const Introduction = () => {
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    setPlayerVisible(true);
  }, []);
  return (
    <section className="w-full">
      <div className="px-4 py-20 flex flex-col items-center max-w-[1000px] mx-auto text-center">
        <p>
          <span className="font-bold">Axen Property </span>
          is a pioneering leader in real estate development and services,
          dedicated to creating premium living spaces that seamlessly blend
          modern sophistication with timeless elegance and sustainability.
        </p>
        <br />
        <span>
          With deep insights into customer needs, from investment aspirations to
          residential preferences, and comprehensive industry data, Axen
          Property delivers tailored solutions for developers of all scales and
          sectors. We not only build enduring trust with investors but also
          craft spaces that bring ultimate satisfaction to residents who choose
          our projects as their ideal home.
        </span>
      </div>
      <div className="w-full aspect-video">
        {isPlayerVisible && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Mlq9jrXbEFo&list=RDMlq9jrXbEFo&start_radio=1"
            width="100%"
            height="100%"
            controls={true}
          />
        )}
      </div>
    </section>
  );
};
