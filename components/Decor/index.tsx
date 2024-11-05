import React from "react";
import { Button } from "../ui/button";
export const Decor = () => {
  return (
    <div className="flex flex-col gap-2 px-5">
      <div className="grid grid-cols-4 gap-2">
        {/* Cột bên trái */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <div
            style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
            className="bg-blue-200 p-4 bg-[url('/static/images/WomanOnLake.jpg')]"
          ></div>
          <div
            style={{ backgroundImage: `url(/static/images/Leaf.jpg)` }}
            className="bg-blue-400 px-5 py-10 lg:p-16 flex flex-col gap-5 align-space-between"
          >
            <span className="avenir text-2xl lg:text-4xl text-white uppercase">
              Be Mindful & Present
            </span>
            <span className="text-white">
              Fully embrace the here and now, and focus on what matters most.
            </span>
            <Button className="py-3 px-10 h-auto rounded-full mt-5">
              <span className="font-bold text-base capitalize w-auto">
                Learn More
              </span>
            </Button>
          </div>
        </div>

        {/* Cột bên phải */}
        <div
          style={{
            backgroundImage: `url(/static/images/WomanReadingBookByFireplace.jpg)`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
          className="col-span-2  p-4 relative"
        >
          <span
            style={{ backgroundColor: "rgba(28, 28, 28, 0.75)" }}
            className="absolute left-0 bottom-0 p-2.5 text-white text-xs"
          >
            JW Marriott Nashville
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Cột bên phải */}
        <div className="col-span-2 bg-green-200 py-10 px-5 flex flex-col justify-center gap-5 bg-[url('/static/images/Blackbackground.png')]">
          <span className="avenir text-2xl text-white uppercase">
            Be Together
          </span>
          <span className="text-white">
            Hotels designed to connect with the people most important to you.
          </span>
          <Button className="py-3 px-10 h-auto rounded-full w-[200px] mt-5 bg-red-200 hover:bg-red-100">
            <span className="font-bold text-black text-base capitalize w-auto">
              Learn More
            </span>
          </Button>
        </div>
        {/* Cột bên trái */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <div
            style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
            className="bg-blue-200 p-4 bg-[url('/static/images/DiningTableMarcoIslandBeach.jpg')]"
          ></div>
          <div
            style={{
              backgroundImage: `url(/static/images/PinkBackground-2.jpg)`,
            }}
            className="bg-blue-400 px-5 py-10 lg:p-16 flex flex-col gap-5 align-space-between"
          >
            <span className="avenir text-2xl lg:text-4xl uppercase">
              Be Nourished
            </span>
            <span>Enriching your mind, body and spirit.</span>
            <Button className="py-3 px-10 h-auto rounded-full mt-5">
              <span className="font-bold text-base capitalize w-auto">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
