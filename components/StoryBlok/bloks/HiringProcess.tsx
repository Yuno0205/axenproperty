"use client";
import { HiringProcessBlok } from "@/types/storyblok";
import { storyblokEditable } from "@storyblok/react";
import { Inter, Open_Sans } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "vietnamese"], weight: ["700"] });
const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
});

export default function HiringProcess({ blok }: { blok: HiringProcessBlok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full mx-auto py-16 bg-white"
    >
      <h3
        className={clsx(
          inter.className,
          "text-center font-bold text-3xl mb-12 text-gray-900"
        )}
      >
        {blok.title}
      </h3>

      <div className="relative">
        {/* Dash line */}
        <div className="absolute top-[15px] left-0 right-0 border-t-2 border-gray-300 border-dashed hidden md:block" />

        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-y-8">
            {blok.steps?.map((step) => (
              <div
                key={step._uid}
                className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 relative group"
              >
                {/* Dot */}
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-400 flex items-center justify-center relative z-10 mb-4 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-gray-400 group-hover:bg-white transition-colors"></div>
                </div>

                {/* Content */}
                <div className="text-center w-full h-full p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                  <span
                    className={clsx(
                      openSans.className,
                      "text-4xl font-bold text-gray-300 block mb-3"
                    )}
                  >
                    {step.number}
                  </span>
                  <span
                    className={clsx(
                      openSans.className,
                      "text-lg font-medium text-gray-800"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
