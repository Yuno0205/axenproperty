import clsx from "clsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const Properties = () => {
  return (
    <div className="mt-10 bg-[url('/static/images/new/properties_banner.jpg')] aspect-video bg-cover text-center bg-no-repeat bg-center">
      <div className="w-full pt-20 xs:pt-10 px-10 xs:px-4">
        <span
          className={clsx(
            poppins.className,
            "text-6xl font-bold text-[#666666] xs:text-4xl"
          )}
        >
          AXEN PROPERTY
        </span>
        <div className="w-2/3 max-w-[780px] mx-auto text-justify text-[#666666] py-5 xs:text-center px-4 xs:w-full">
          <span className="font-semibold ">AXEN Property</span> is a pioneering
          entity in the field of real estate development and services, with a
          mission to create premium living spaces that harmoniously blend modern
          style, elegance, and timeless sustainability.
        </div>
      </div>
    </div>
  );
};
