"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const Moment = () => {
  const [isPlayerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    setPlayerVisible(true);
  }, []);

  return (
    <section className="w-full bg-[#f4f4f4]">
      <div className="px-4 py-20 flex flex-col items-center max-w-[1000px] mx-auto text-center">
        <span>
          Axen Property is a pioneering real estate development company
          dedicated to creating high-class living spaces that align with modern
          lifestyles while preserving elegance and sustainability over time. We
          are committed to providing our clients with more than just houses; we
          deliver exceptional living experiences where youthful, dynamic
          lifestyles blend seamlessly with refined beauty.
        </span>
        <br />
        <span>
          In every project, Axen Property focuses meticulously on every detail,
          from design to quality, ensuring each space is crafted as a work of
          art that reflects creativity and a commitment to excellence. We
          continually advance smart, sustainable real estate solutions to meet
          the growing living demands of our clients and the broader community.
        </span>
      </div>
      <div className="w-full">
        {isPlayerVisible && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Mlq9jrXbEFo&list=RDMlq9jrXbEFo&start_radio=1"
            width="100%"
            // height={475}
            controls={true}
          />
        )}
      </div>
      <div className="px-16 py-20 flex flex-col">
        <span className="avenir text-4xl">
          OUR PRPJECTS:
          <br />
          Crafted for Elegance and Functionality
        </span>
        <span className="pt-3">
          Explore our portfolio of completed, ongoing, and upcoming projects.
          Each project reflects our dedication to quality, creativity, and
          modern design. We invite you to witness how we turn visions into
          beautiful, functional realities
        </span>
      </div>
    </section>
  );
};
