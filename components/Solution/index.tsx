"use client";
import { SolutionFields } from "@/types/contentful";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SolutionProps = {
  data: SolutionFields;
};

export const Solutions = ({ data }: SolutionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50px 0px" });

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
          className="h-[375px] w-full relative"
        ></div>

        {/* Animated Container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{ width: "calc(100% - 100px)" }}
          className="bg-white py-12 px-20 sm:px-5 sm:py-10 flex flex-col mx-auto items-center shadow-lg sm:text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="p-4 mb-5"
          >
            <Image
              src={`https:${data?.logo?.fields?.file?.url}`}
              alt="logo"
              width={206}
              height={180}
              className="object-contain"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="avenir text-4xl font-light uppercase sm:text-3xl"
          >
            {data.title}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="pt-2.5 pb-5"
          >
            <span className="font-bold">{data.text[0]}</span> {data.text[1]}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            <Button className="my-5">
              <span className="text-lg capitalize">{data.btnText}</span>
              <CopyIcon />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
