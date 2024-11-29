import clsx from "clsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Properties = () => {
  return (
    <div className="mt-10 bg-[url('/static/images/new/properties_banner.jpg')] aspect-video bg-cover text-center">
      <div className="w-full h-full pt-20">
        <span
          className={clsx(
            poppins.className,
            "text-6xl font-bold leading-6 text-[#666666]"
          )}
        >
          AXEN PROPERTY
        </span>
        <div className="max-w-[750px] mx-auto text-justify text-[#666666] py-5">
          <span className="font-semibold">AXEN Property</span> is a pioneering
          entity in the field of real estate development and services, with a
          mission to create premium living spaces that harmoniously blend modern
          style, elegance, and timeless sustainability.
        </div>
      </div>
    </div>
  );
};
