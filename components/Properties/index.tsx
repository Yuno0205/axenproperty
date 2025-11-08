"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Properties = () => {
  return (
    <section className="mt-10 aspect-video bg-cover text-center bg-no-repeat bg-center w-full relative">
      {/* Image background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", once: true }}
        className="w-full h-full relative min-h-[300px]"
      >
        {/* <Image
          src={`${data?.backgroundImage.url}`}
          alt="banner"
          fill
          className="object-cover z-0"
          quality={75}
          priority
        /> */}
      </motion.div>

      {/* Tiêu đề và nội dung */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="w-full pt-20 xs:pt-10 px-10 xs:px-4 z-10 absolute top-0 left-0 xs:pt-5 "
      >
        {/* Tiêu đề */}
        <h2
          className={clsx(
            poppins.className,
            "text-6xl font-bold text-[#666666] xs:text-4xl xs:text-white"
          )}
        >
          {/* {data.title} */}
        </h2>

        {/* Nội dung */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          className="w-2/3 max-w-[780px] mx-auto text-justify text-[#666666] py-5 xs:text-center px-4 xs:w-full xs:text-white"
        >
          {/* <span className="font-semibold">{data.content[0]}</span>{" "}
          {data.content[1]} */}
        </motion.div>
      </motion.div>
    </section>
  );
};
