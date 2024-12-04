import clsx from "clsx";
import { Inter, Open_Sans } from "next/font/google";
import job from "@/public/static/images/new/job.png";
import exp from "@/public/static/images/new/exp.png";
import adress_icon from "@/public/static/images/new/adress_icon.png";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
const Careers = () => {
  const steps = [
    {
      number: "1",
      title: "Ứng tuyển",
    },
    {
      number: "2",
      title: "Phỏng vấn qua điện thoại với nhà tuyển dụng",
    },
    {
      number: "3",
      title: "Bài kiểm tra hoặc đánh giá năng lực trực tuyến (tùy vị trí)",
    },
    {
      number: "4",
      title: "Phỏng vấn trực tiếp",
    },
    {
      number: "5",
      title: "Chờ thư mời nhận việc",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white">
      {/* Banner */}
      <div
        style={{ backgroundPosition: "50% 30%", backgroundSize: "cover" }}
        className="h-[360px] relative bg-[url('/static/images/new/team.jpg')]  bg-cover"
      ></div>
      {/* Content */}
      <div className="w-full">
        <div className="max-w-5xl mx-auto px-20 py-24 mx-auto">
          <div
            className={clsx(
              inter.className,
              "flex justify-between items-center mb-6"
            )}
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Các vị trí đang tuyển
            </h2>
            <span className="text-gray-600 text-lg font-bold">
              03 Vị trí tuyển dụng
            </span>
          </div>

          <div className={clsx(openSans.className, "")}>
            {/* Real Estate Business Specialist */}
            <div className="border-y p-8 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-[#202325] mb-2">
                Chuyên viên kinh doanh Bất động sản
              </h3>
              <div className="flex flex-wrap gap-16 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Image src={job} alt="job" />
                  <span>Kinh doanh - Marketing</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={exp} alt="exp" />
                  <span>Yêu cầu kinh nghiệm</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={adress_icon} alt="exp" />
                  <span>Q7 - TP. HCM</span>
                </div>
              </div>
            </div>

            {/* Customer Care Specialist */}
            <div className="border-y p-8 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-[#202325] mb-2">
                Chuyên viên chăm sóc khách hàng
              </h3>
              <div className="flex flex-wrap gap-16 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Image src={job} alt="job" />
                  <span>Kinh doanh - Marketing</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={exp} alt="exp" />
                  <span>Yêu cầu kinh nghiệm</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={adress_icon} alt="exp" />
                  <span>Q7 - TP. HCM</span>
                </div>
              </div>
            </div>

            {/* Marketing Intern */}
            <div className="border-y p-8 hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-[#202325] mb-2">
                Thực tập sinh Marketing (Trợ lý)
              </h3>
              <div className="flex flex-wrap gap-16 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Image src={job} alt="job" />
                  <span>Kinh doanh - Marketing</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={exp} alt="exp" />
                  <span>Yêu cầu kinh nghiệm</span>
                </div>
                <div className="flex items-center gap-1 ">
                  <Image src={adress_icon} alt="exp" />
                  <span>Q7 - TP. HCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 w-full mx-auto">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="w-full  mx-auto py-10">
          <h3
            className={clsx(
              inter.className,
              "text-center font-bold text-2xl mb-10"
            )}
          >
            Quy trình tuyển dụng
          </h3>
          <div className="relative">
            {/* Dashed timeline line */}
            <div className="absolute top-[5px] left-0 right-0 border-t-2 border-gray-300 border-dashed" />

            {/* Steps */}
            <div className="max-w-[1300px] mx-auto px-4">
              {/* Steps */}
              <div className="relative flex flex-wrap justify-between">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-1/5 mb-8 lg:mb-0"
                  >
                    {/* Circle */}
                    <div className="w-3 h-3 rounded-full bg-[#797B7C] border border-gray-400 flex items-center justify-center relative z-10"></div>
                    {/* Text with background color */}
                    <div className="text-center mt-4 text-sm px-4 pb-20 bg-gray-100 aspect-square rounded-lg w-full max-w-[240px] flex flex-col items-center hover:scale-105 transition-all">
                      <div className="w-1/3 bg-white aspect-square">
                        <span
                          className={clsx(
                            openSans.className,
                            "text-2xl font-semibold text-[#797B7C]"
                          )}
                        >
                          {step.number}
                        </span>
                      </div>
                      <span className={clsx(openSans.className, "mt-5")}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
