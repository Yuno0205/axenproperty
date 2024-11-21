"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import church from "@/public/static/images/new/church.jpg";
import { Button } from "../ui/button";
import Image from "next/image";

export const Projects = () => {
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
    <section className="w-full bg-[#f4f4f4]">
      <div className="px-16 py-20 flex flex-col 2xs:px-4">
        <span className="avenir text-4xl 2xs:text-3xl">
          OUR PROJECTS:
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
      <div className="flex flex-col gap-2 px-5">
        {/* Hàng đầu tiên */}
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-2">
          {/* Cột bên trái */}
          <div className="col-span-2 sm:col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-2 sm:min-h-lvh">
            <div
              style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
              className="bg-blue-200 p-4 bg-[url('/static/images/new/ceiling.jpg')]"
            ></div>
            <div
              style={{ backgroundImage: `url(/static/images/Leaf.jpg)` }}
              className="bg-blue-400 sm:px-5 sm:py-10 p-16 flex flex-col sm:justify-center gap-5 align-space-between"
            >
              <span className="avenir sm:text-2xl text-4xl text-white uppercase">
                Completed Projects
              </span>
              <span className="text-white">
                Discover our accomplished works, where every detail speaks to
                the quality and artistry we uphold
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
            className="col-span-2 sm:col-span-1 p-4 relative sm:min-h-lvh"
          ></div>
        </div>

        {/* Hàng thứ hai */}
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-2">
          {/* Cột bên phải */}
          <div className="col-span-2 sm:col-span-1 bg-green-200 py-10 px-5 lg:p-16 flex flex-col justify-end gap-5 bg-[url('/static/images/new/resort1.jpg')] bg-cover bg-no-repeat">
            <div className="flex flex-col bg-red-200 py-2 rounded-full px-6 w-[500px] sm:w-full">
              <span className="avenir text-2xl uppercase">Future Projects</span>
              <span>
                Get a glimpse into the future of luxury living with Axen
                Property.
              </span>
            </div>

            <Button className="py-3 px-10 h-auto rounded-full w-[200px] mt-5 bg-red-200 hover:bg-red-100">
              <span className="font-bold text-black text-base capitalize w-auto">
                Learn More
              </span>
            </Button>
          </div>

          {/* Cột bên trái */}
          <div className="col-span-2 sm:col-span-1 grid grid-cols-2 sm:grid-cols-1 gap-2">
            <div
              style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
              className="bg-blue-200 p-4 bg-[url('/static/images/new/resort2.jpg')] sm:min-h-svh"
            ></div>
            <div
              style={{
                backgroundImage: `url(/static/images/PinkBackground-2.jpg)`,
              }}
              className="bg-blue-400 sm:px-5 sm:py-10 p-16 flex flex-col gap-5 align-space-between"
            >
              <span className="avenir sm:text-2xl text-4xl uppercase">
                Current Developments
              </span>
              <span>
                Follow the journey of our ongoing projects as we bring new
                spaces to life.
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

      {/* Slider */}
      <div className="w-full py-10 aspect-video z-2 relative">
        <Carousel
          responsive={responsive}
          // arrows={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          className="h-full object-cover"
        >
          <Image
            src={church}
            alt="slide"
            className="w-full aspect-video object-cover "
          />
        </Carousel>
      </div>
    </section>
  );
};
