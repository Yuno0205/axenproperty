import { DevelopmentFields } from "@/types/contentful";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  data: DevelopmentFields;
};
export const Development = ({ data }: Props) => {
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
          Servicesd by J. Willard&apos;s Approach to Life
        </span>
        <span className="my-2.5">
          The JW Marriott experience is reflective of many of our founder&apos;s
          forward-thinking practices.
        </span>
      </div> */}

      {/* Services */}

      <div className="container mx-auto w-full">
        <div className="container w-full mx-auto h-full">
          {/* <div className="py-20 px-16 flex flex-col items-center xs:text-center">
            <Image src={logo} alt="logo" className="h-40 object-contain" />
            <span className="avenir text-3xl">
              Comprehensive Real Estate Services
            </span>
            <span className="my-2.5">
              At Axen Property, we offer a full range of real estate services
              designed to meet the needs of our clients and the community
            </span>
          </div> */}
          <div className="w-full relative py-10">
            <div className="w-full h-[365px] relative">
              <Image
                src={`https:${data?.backgroundImage?.fields?.file?.url}`}
                alt="apartment"
                fill
                className="w-full object-cover h-full"
              />
            </div>
            <div className="w-2/5 sm:w-full px-4">
              <div className="mt-[-300px] sm:mt-[-50px] h-[365px] ml-12 sm:mx-auto px-16 py-12 bg-white w-full flex flex-col justify-center shadow-lg  z-2 relative xs:text-center">
                <span className="avenir text-3xl font-light uppercase">
                  {data.title}
                </span>
                <span className="my-2.5">{data.text}</span>

                <Button className="w-40 my-5 ">
                  <span className="font-bold text-lg capitalize">
                    {data.btnText}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation */}

      {/* <div className="py-16 mx-auto flex  sm:flex-col gap-2 px-12 sm:px-5 sm:py-10">
        <div className="w-1/2 sm:w-full  bg-[url('/static/images/texture-5.png')] p-20 sm:p-8 sm:text-center  flex flex-col justify-center text-white">
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
          className="w-1/2 object-cover aspect-square sm:w-full"
        />
      </div> */}

      {/* Collections */}
      {/* <div className="mx-12 mb-20 mt-10 px-20 sm:px-5 xs:mx-5 2xs:px-0">
        <div className="flex flex-col xs:text-center">
          <span className="avenir text-3xl font-light uppercase">
            Property Management
          </span>
          <span className="my-2.5">
            We provide ongoing property management services to ensure the
            long-term value of your investment.
          </span>
        </div>
        <div className="flex gap-2 sm:flex-wrap">
          <div className="w-1/2 flex 2xs:flex-wrap sm:w-full">
            <div className="w-2/5 2xs:w-full pr-5 xs:pr-2 my-2.5 flex justify-center items-center">
              <Image
                src={key}
                alt="key"
                className="w-auto h-[240px] object-cover"
              />
            </div>
            <div className="w-3/5 2xs:w-full pl-2.5 pb-5 pr-8 pt-10 xs:p-4 flex flex-col justify-center ">
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
          <div className="w-1/2 flex 2xs:flex-col sm:w-full">
            <div className="w-2/5 2xs:w-full pr-5 xs:pr-2 my-2.5 flex justify-center items-center">
              <Image
                src={construction}
                alt="construction"
                className="w-auto h-[240px] object-cover"
              />
            </div>
            <div className="w-3/5 2xs:w-full pl-2.5 pb-5 pr-8 pt-10 xs:p-4 flex flex-col justify-center">
              <span className="avenir text-3xl font-light uppercase ">
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
      </div> */}

      {/* Support */}
      {/* <div className=" mx-auto flex gap-2 px-12 sm:flex-wrap xs:px-5">
        <div className="w-1/2 bg-[url('/static/images/texture-5.png')] p-20 sm:p-8 flex flex-col justify-center text-white sm:w-full">
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
        <div className="w-1/2 sm:w-full aspect-square">
          <Image
            src={church}
            alt="church"
            className="object-cover h-full w-full"
          />
        </div>
      </div> */}
    </section>
  );
};
