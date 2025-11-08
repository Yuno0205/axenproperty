"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";

export const Development = () => {
  const ref = useRef(null); // Tạo ref để theo dõi phần tử

  return (
    <section className="w-full h-full">
      <div className="w-full relative py-10">
        <div className="w-full h-[365px] relative">
          {/* <Image
            src={`${data?.backgroundImage.url}`}
            alt="apartment"
            fill
            className="w-full object-cover h-full"
            priority
            quality={100}
          /> */}
        </div>
        <div className="w-2/5 sm:w-full px-4">
          <motion.div
            ref={ref} // Liên kết ref với motion.div
            initial={{ opacity: 0, x: -300, y: 30 }} // Ẩn đi ban đầu
            whileInView={{ opacity: 1, x: 0 }} // Hiển thị khi trong tầm nhìn
            transition={{
              duration: 0.8, // Thời gian hiệu ứng
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mt-[-300px] sm:mt-[-50px] h-[365px] ml-12 sm:mx-auto px-16 py-12 bg-white w-full flex flex-col justify-center shadow-lg z-2 relative xs:text-center"
          >
            <h2 className="avenir text-3xl font-light uppercase">
              {/* {data.title} */}
            </h2>
            {/* <span className="my-2.5">{data.text}</span> */}

            <Button className="w-40 my-5 py-3 mb-2.5 h-auto rounded-full">
              <Link href={"/"} className="font-normal text-lg capitalize">
                {/* {data.btnText} */}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
