import icon from "@/public/static/images/icon.png";
import camel from "@/public/static/images/Camelback-Inn_Alice_-JWMSr1960_1508x999.jpg";
import sky from "@/public/static/images/jw-skyline-view-madrid-36409-v2-scaled.jpg";
import wander from "@/public/static/images/jw-wander-cover-27735-2000x2608-1-scaled.jpg";
import subtle from "@/public/static/images/SubtleSophisticationCandle-e1563931126185.jpg";
import beach from "@/public/static/images/Beach-Wedding-1-min-1.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
export const Inspire = () => {
  return (
    <section className="w-full h-full">
      {/* Title */}
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

      {/* Camel */}
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

      {/* 7 Days */}
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
      {/* Collections */}
      <div className="mx-12 my-20">
        <div className="flex gap-2">
          <div className="w-1/2 flex">
            {/* Image */}
            <div className="w-2/5 pr-5 my-2.5 flex justify-center items-center">
              <Image
                src={wander}
                alt="camel"
                className="w-auto max-h-[240px]"
              />
            </div>
            <div className="w-3/5 pl-2.5 pb-5 pr-8 pt-10 flex flex-col">
              <span className="font-proximaBold text-lg mb-8">JWM Stories</span>
              <span className="avenir text-4xl font-light uppercase">
                dream. discover. escape.
              </span>
              <span className="my-2.5">
                Discover your greatest well-being with stories from around the
                globe.
              </span>
              <Button className="max-w-60 my-5 flex">
                <span className="font-bold text-lg capitalize">
                  Read JWM stories
                </span>
                <CopyIcon />
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex">
            {/* Image */}
            <div className="w-2/5 pr-5 my-2.5 flex justify-center items-center">
              <Image
                src={subtle}
                alt="subtle"
                className="w-auto max-h-[240px]"
              />
            </div>
            <div className="w-3/5 pl-2.5 pb-5 pr-8 pt-10 flex flex-col">
              <span className="font-proximaBold text-lg mb-8">
                Curated by JW
              </span>
              <span className="avenir text-3xl font-light uppercase">
                From our collection to yours
              </span>
              <span className="my-2.5">
                Experience the culture, design and polished comfort of our
                world-renowned hotels with the JW Marriott home collection.
              </span>
              <Button className="max-w-60 my-5 flex">
                <span className="font-bold text-lg capitalize">
                  Read JWM stories
                </span>
                <CopyIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Moment */}
      <div className="pb-16 mx-auto flex gap-2 px-12">
        <div className="w-1/2 bg-[url('/static/images/texture-5.png')] p-20 flex flex-col justify-center text-white">
          <span className="avenir text-4xl font-light uppercase ">
            Your Everlasting Moment
          </span>
          <span className="my-2.5">
            Our commitment to the seamless orchestration of every detail lets
            you focus on the real celebration.
          </span>
          <Button className="w-60 my-5 bg-[#e4beb6] hover:bg-[#eacbc5]">
            <span className="font-bold text-lg capitalize text-black">
              Wedding Possibilities
            </span>
          </Button>
        </div>
        <Image src={beach} alt="beach" className="w-1/2 object-cover" />
      </div>
    </section>
  );
};
