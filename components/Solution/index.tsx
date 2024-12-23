import { SolutionFields } from "@/types/contentful";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

type SolutionProps = {
  data: SolutionFields;
};

export const Solutions = ({ data }: SolutionProps) => {
  console.log(data);

  return (
    <section className="w-full">
      {/* Horizontal */}
      <div className="w-full h-full pb-6">
        <div
          style={{
            backgroundImage: `url(${data?.backgroundImage?.fields?.file?.url})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
          className=" h-[375px] w-full relative"
        ></div>
        <div
          style={{ width: "calc(100% - 100px)" }}
          className=" bg-white py-12 px-20 sm:px-5 sm:py-10 flex flex-col mx-auto items-center shadow-lg sm:text-center"
        >
          <div className="p-4 mb-5">
            <Image
              src={`https:${data?.logo?.fields?.file?.url}`}
              alt="logo"
              width={206}
              height={180}
              className="object-contain"
            />
          </div>
          <span className="avenir text-4xl font-light uppercase sm:text-3xl">
            {data.title}
          </span>
          <span className="pt-2.5 pb-5">
            <span className="font-bold">{data.text[0]}</span> {data.text[1]}
          </span>
          <Button className=" my-5">
            <span className="text-lg capitalize">{data.btnText}</span>
            <CopyIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};
