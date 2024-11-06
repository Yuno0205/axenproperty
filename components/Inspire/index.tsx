import icon from "@/public/static/images/icon.png";
import camel from "@/public/static/images/Camelback-Inn_Alice_-JWMSr1960_1508x999.jpg";
import sky from "@/public/static/images/jw-skyline-view-madrid-36409-v2-scaled.jpg";

import Image from "next/image";
import { Button } from "../ui/button";
export const Inspire = () => {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full py-20 px-16 flex flex-col items-center justify-center gap-3">
        <div className="pt-4 px-4 pb-6">
          <span className="avenir text-3xl font-light">
            <Image src={icon} alt="icon" width={40} height={40} />
          </span>
        </div>
        <span className="avenir text-4xl font-light uppercase">
          Inspired by J. Willard&apos;s Approach to Life
        </span>
        <span className="my-2.5">
          The JW Marriott experience is reflective of many of our founder&apos;s
          forward-thinking practices.
        </span>
      </div>
      <div className="w-full h-[365px] relative">
        <Image src={camel} alt="camel" className="w-full object-cover h-full" />
        <div className="absolute bottom-[-50px] left-[50px] px-16 py-12 bg-white w-[665px] flex flex-col shadow-lg">
          <span className="avenir text-3xl font-light uppercase">
            Our Heritage of Holistic Well-Being
          </span>
          <span className="my-2.5">
            Our founder, J. Willard Marriott, believed that taking care of
            himself allowed him to better care for others. A family man who
            deeply understood his impact on the those around him, his legacy
            lives on at over 100 JW Marriott hotels around the globe.
          </span>

          <Button className="w-40 my-5 ">
            <span className="font-bold text-lg capitalize">Learn more</span>
          </Button>
        </div>
      </div>
      <div className="py-16 mx-auto flex gap-2 px-12">
        <div className="w-1/2 bg-[url('/static/images/texture-5.png')] p-20 flex flex-col justify-center text-white">
          <span className="avenir text-3xl font-light uppercase ">
            7 Days Of well-being
          </span>
          <span className="my-2.5">
            Turn unique destinations into mindful and experiential paths through
            deserts, beachfronts, cities, and safaris and discover all the
            enriching ways to pursue the things you love.
          </span>
          <Button className="w-40 my-5 ">
            <span className="font-bold text-lg capitalize">
              Start the journey
            </span>
          </Button>
        </div>
        <Image src={sky} alt="sky" className="w-1/2 object-cover" />
      </div>
    </section>
  );
};
