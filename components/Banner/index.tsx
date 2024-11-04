import textture from "@/public/static/images/texture-leaves.jpg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
export const Banner = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: "url('/static/images/jw_istanbul_marmara.jpg')",
            backgroundPosition: "1.9% 95.94%",
            backgroundSize: "cover", // Tùy chọn
          }}
          className="w-full h-[450px] relative"
        >
          <span className="absolute text-white bottom-14 left-5 py-2.5 text-sm">
            JW Marriott® Istanbul Marmara Sea{" "}
          </span>
          <span className="avenir text-white absolute bottom-32 left-5 text-5xl">
            STAY IN THE MOMENT
          </span>
          <div className="px-5 w-full absolute bottom-[-60px]">
            <div className="h-[120px] flex ">
              <div className="p-2.5 bg-[url('/static/images/texture-leaves.jpg')] bg-cover bg-center bg-no-repeat text-center flex items-center">
                <span className="text-white text-2xl z-2 ">BOOK A HOTEL</span>
              </div>
              <div className="flex flex-1 p-8 bg-white items-center gap-5">
                <div className="flex flex-1 flex-col gap-2">
                  <span className="font-proximaSemiBold text-xs">
                    Destination
                  </span>
                  <Input placeholder="Where to?" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <span className="font-proximaSemiBold text-xs">Dates</span>
                  <Input placeholder="Mon, Nov 04 - Tue, Nov 05" />
                </div>
                <Button className="py-2.5 px-10 mb-2.5 h-auto rounded-full mt-8">
                  <span className="font-bold text-base capitalize">
                    Reserve Now
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
