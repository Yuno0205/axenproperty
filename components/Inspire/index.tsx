import apartment from "@/public/static/images/new/apartment2.jpg";
import church from "@/public/static/images/new/church2.jpg";
import construction from "@/public/static/images/new/construction.jpg";
import key from "@/public/static/images/new/key.jpg";
import logo from "@/public/static/images/new/logo.png";
import tower from "@/public/static/images/new/tower2.jpg";
import { CopyIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
export const Inspire = () => {
  return (
    <section className="w-full h-full">
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
        <div className="flex flex-col">
          <span className="avenir text-3xl font-light uppercase">
            Property Management
          </span>
          <span className="my-2.5">
            We provide ongoing property management services to ensure the
            long-term value of your investment.
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 flex">
            {/* Image */}
            <div className="w-2/5 pr-5 my-2.5 flex justify-center items-center">
              <Image
                src={key}
                alt="key"
                className="w-auto h-[240px] object-cover"
              />
            </div>
            <div className="w-3/5 pl-2.5 pb-5 pr-8 pt-10 flex flex-col justify-center">
              <span className="avenir text-4xl font-light uppercase justify-center">
                Tenant Services
              </span>
              <span className="my-2.5">
                We handle all tenant-related tasks, including screening, lease
                management, and responding to tenant needs, ensuring a
                hassle-free experience for property owners and a pleasant stay
                for tenants.
              </span>
              <Button className="max-w-60 my-5 flex">
                <span className=" text-lg capitalize">Contact Axen</span>
                <CopyIcon />
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex">
            {/* Image */}
            <div className="w-2/5 pr-5 my-2.5 flex justify-center items-center">
              <Image
                src={construction}
                alt="construction"
                className="w-auto h-[240px] object-cover"
              />
            </div>
            <div className="w-3/5 pl-2.5 pb-5 pr-8 pt-10 flex flex-col justify-center">
              <span className="avenir text-3xl font-light uppercase">
                Maintenance and Repairs
              </span>
              <span className="my-2.5">
                Our team provides regular maintenance and prompt repairs to keep
                properties in prime condition, ensuring tenant satisfaction and
                preserving the value of the investment.
              </span>
              <Button className="max-w-60 my-5 flex">
                <span className="text-lg capitalize">Contact Axen</span>
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
            After-Sales Support
          </span>
          <span className="my-2.5">
            Our relationship with clients doesn’t end at purchase; we offer
            ongoing support and maintenance.
          </span>
          <Button className="w-60 my-5 bg-[#e4beb6] hover:bg-[#eacbc5]">
            <span className="font-bold text-lg capitalize text-black">
              Your customer Happy
            </span>
          </Button>
        </div>
        <Image src={church} alt="church" className="w-1/2 object-cover" />
      </div>

      {/* Horizontal */}
      <div className="w-full h-full pb-6">
        <div
          style={{ backgroundPosition: "50% 50%", backgroundSize: "cover" }}
          className="bg-[url('/static/images/InfinityPool_SJDJW.jpg')] h-[375px] w-full relative"
        ></div>
        <div
          style={{ width: "calc(100% - 100px)" }}
          className=" bg-white py-12 px-20 flex flex-col mx-auto items-center shadow-lg"
        >
          <div className="p-4 mb-5">
            <Image
              src={logo}
              alt="logo"
              height={180}
              className="object-contain"
            />
          </div>
          <span className="avenir text-4xl font-light uppercase">
            DELIVERING PROFESSIONAL REAL ESTATE SOLUTIONS
          </span>
          <span className="pt-2.5 pb-5">
            Axen Property delivers innovative, professional real estate
            solutions, enhancing community value and creating ideal living and
            working spaces.
          </span>
          <Button className=" my-5">
            <span className="text-lg capitalize">Contact Axen</span>
            <CopyIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};
