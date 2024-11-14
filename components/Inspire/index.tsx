import icon from "@/public/static/images/icon.png";
import apartment from "@/public/static/images/new/apartment2.jpg";
import tower from "@/public/static/images/new/tower2.jpg";
import wander from "@/public/static/images/jw-wander-cover-27735-2000x2608-1-scaled.jpg";
import subtle from "@/public/static/images/SubtleSophisticationCandle-e1563931126185.jpg";
import logo from "@/public/static/images/1-color.png";
import beach from "@/public/static/images/Beach-Wedding-1-min-1.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
export const Inspire = () => {
  return (
    <section className="w-full h-full pb-80">
      {/* Title */}
      {/* <div className="container mx-auto w-full py-20 px-16 flex flex-col items-center justify-center gap-3">
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
      </div> */}

      {/* Camel */}
      <div className="w-full h-[365px] relative">
        <Image
          src={apartment}
          alt="apartment"
          className="w-full object-cover h-full"
        />
        <div className="absolute bottom-[-50px] left-[50px] px-16 py-12 bg-white w-[665px] flex flex-col shadow-lg">
          <span className="avenir text-3xl font-light uppercase">
            Project Development
          </span>
          <span className="my-2.5">
            We handle every step, from design to completion, ensuring each
            project is a masterpiece.
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
            Real Estate Consultation
          </span>
          <span className="my-2.5">
            Our expert team provides guidance to help clients choose the right
            living space.
          </span>
          <Button className="w-52 my-5">
            <span className=" text-lg capitalize">Start the journey</span>
          </Button>
        </div>
        <Image
          src={tower}
          alt="tower"
          className="w-1/2 object-cover h-[600px]"
        />
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

      {/* Horizontal */}
      <div className="w-full h-full pb-6">
        <div
          style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
          className="bg-[url('/static/images/InfinityPool_SJDJW.jpg')] h-[375px] w-full relative"
        >
          {/* <div className="absolute text-white bottom-14 left-5 py-2.5 text-sm">
            JW Marriott® Istanbul Marmara Sea
          </div> */}
          <div
            style={{ width: "calc(100% - 100px)" }}
            className="absolute left-[50px] top-[320px] bg-white py-12 px-20 flex flex-col mx-auto items-center shadow-lg"
          >
            <div className="p-4 mb-5">
              <Image src={logo} alt="logo" />
            </div>
            <span className="avenir text-4xl font-light uppercase">
              EXPAND YOUR HORIZONS
            </span>
            <span className="pt-2.5 pb-5">
              Overwater bungalows. Former palaces. Exclusive mountain escapes.
              Marriott Bonvoy™ gives you unparalleled access to the largest
              collection of luxury hotels worldwide.
            </span>
            <Button className=" my-5">
              <span className="font-bold text-lg capitalize">Join now</span>
              <CopyIcon />
            </Button>
            <Button className=" mb-5 hover:bg-white" variant="ghost">
              <span className="font-bold text-lg capitalize hover:underline uppercase">
                Sign in
              </span>
              <CopyIcon />
            </Button>
          </div>
          {/* <div className="h-[1000px] pt-40">1tjhojfklfmlkfmlk</div> */}
        </div>
      </div>
    </section>
  );
};
