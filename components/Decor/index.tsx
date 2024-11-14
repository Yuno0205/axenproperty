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
            className="bg-blue-200 p-4 bg-[url('/static/images/new/ceiling.jpg')]"
          ></div>
          <div
            style={{ backgroundImage: `url(/static/images/Leaf.jpg)` }}
            className="bg-blue-400 px-5 py-10 lg:p-16 flex flex-col gap-5 align-space-between"
          >
            <span className="avenir text-2xl lg:text-4xl text-white uppercase">
              Completed Projects
            </span>
            <span className="text-white">
              Discover our accomplished works, where every detail speaks to the
              quality and artistry we uphold
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
            backgroundImage: `url(/static/images/new/apartment.png)`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
          className="col-span-2  p-4 relative"
        ></div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Cột bên phải */}
        <div className="col-span-2 bg-green-200 py-10 px-5 lg:p-16 flex flex-col justify-end gap-5 bg-[url('/static/images/new/resort1.jpg')] bg-cover bg-no-repeat">
          <div className="flex flex-col bg-red-200 py-2 rounded-full px-6 w-[500px]">
            <span className="avenir text-2xl uppercase">Future Projects</span>
            <span>
              Get a glimpse into the future of luxury living with Axen Property.
            </span>
          </div>

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
            className="bg-blue-200 p-4 bg-[url('/static/images/new/resort2.jpg')]"
          ></div>
          <div
            style={{
              backgroundImage: `url(/static/images/PinkBackground-2.jpg)`,
            }}
            className="bg-blue-400 px-5 py-10 lg:p-16 flex flex-col gap-5 align-space-between"
          >
            <span className="avenir text-2xl lg:text-4xl uppercase">
              Current Developments
            </span>
            <span>
              Follow the journey of our ongoing projects as we bring new spaces
              to life.
            </span>
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
