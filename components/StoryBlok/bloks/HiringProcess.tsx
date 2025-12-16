"use client";
import { HiringProcessBlok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";

export default function HiringProcess({ blok }: { blok: HiringProcessBlok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full mx-auto py-10 bg-white"
    >
      <h3
        className={clsx("text-center font-bold text-2xl mb-10 text-gray-900")}
      >
        {blok.title}
      </h3>

      <div className="relative">
        {/* Dashed timeline line */}
        <div className="absolute top-[5px] left-0 right-0 border-t-2 border-gray-300 border-dashed hidden xl:block" />

        <div className="max-w-[1300px] mx-auto px-4">
          <div className="grid grid-cols-5 justify-items-center gap-4 xs:grid-cols-2 xs:gap-5 md:grid-cols-3 md:gap-6 xl:grid-cols-5 xl:gap-4">
            {blok.steps.map((step) => (
              <div
                key={step._uid}
                className="flex flex-col items-center w-full mb-8 xl:mb-0"
              >
                {/* Circle */}
                <div className="w-3 h-3 rounded-full bg-[#797B7C] border border-gray-400 flex items-center justify-center relative z-10"></div>

                {/* Text with background color */}
                <div className="text-center mt-4 text-sm px-4 pb-20 bg-gray-100 aspect-square rounded-lg w-full max-w-[240px] flex flex-col items-center justify-center hover:scale-105 transition-all">
                  <div className="w-1/3 bg-white aspect-square flex items-center justify-center mb-5">
                    <span
                      className={clsx("text-2xl font-semibold text-[#797B7C]")}
                    >
                      {step.number}
                    </span>
                  </div>
                  <span className={clsx("text-gray-800")}>{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
