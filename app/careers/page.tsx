import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchContentfulData } from "@/lib/contentful";
import clsx from "clsx";
import { Inter, Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import job from "@/public/static/images/new/job.png";
import exp from "@/public/static/images/new/exp.png";
import adress_icon from "@/public/static/images/new/adress_icon.png";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
const Careers = async () => {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await fetchContentfulData("recruitment")).items as any;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen w-full bg-white">
        {/* Banner */}
        <div
          style={{ backgroundPosition: "50% 30%", backgroundSize: "cover" }}
          className="h-[360px] relative bg-[url('/static/images/new/team.jpg')]  bg-cover"
        ></div>
        {/* Content */}
        <div className="w-full">
          <div className="max-w-5xl mx-auto px-20 py-24 xs:px-10 xs:py-12 mx-auto">
            <div
              className={clsx(
                inter.className,
                "flex justify-between items-center mb-6 2xs:flex-col 2xs:gap-4"
              )}
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Các vị trí đang tuyển
              </h2>
              <span className="text-gray-600 text-lg font-bold">
                {data.length} Vị trí tuyển dụng
              </span>
            </div>

            <div className={clsx(openSans.className, "")}>
              {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="border-y p-8 2xs:p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <Link href={`/careers/${item.fields.slug}`} prefetch>
                    <h3 className="text-lg font-semibold text-[#202325] mb-2">
                      {item.fields.name} {/* Hiển thị tên công việc */}
                    </h3>
                    <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        {/* Lĩnh vực */}
                        <Image src={job} alt="job" />
                        <span>{item.fields.field}</span>
                      </div>
                      <div className="flex items-center gap-1 ">
                        {/* Kinh nghiệm */}
                        <Image src={exp} alt="exp" />
                        <span>{item.fields.experience}</span>
                      </div>
                      <div className="flex items-center gap-1 ">
                        {/* Địa chỉ */}
                        <Image src={adress_icon} alt="exp" />
                        <span>{item.fields.address}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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
          <div className="w-full mx-auto py-10">
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
                <div className="relative flex flex-wrap justify-center">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center w-1/5 lg:w-1/3 md:w-1/2 xs:w-full mb-8 lg:mb-0"
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
          <div className="max-w-5xl mx-auto px-5">
            <h3
              className={clsx(
                inter.className,
                "text-center font-bold text-2xl mb-10"
              )}
            >
              Câu hỏi thường gặp
            </h3>
            <div className={clsx(openSans.className, "w-full")}>
              <Tabs defaultValue="fulltime" className=" mx-auto pb-20">
                <TabsList className="w-full justify-between h-auto">
                  <TabsTrigger
                    value="fulltime"
                    className="px-10 xs:px-4 2xs:px-2 py-2 font-bold "
                  >
                    Fulltime
                  </TabsTrigger>
                  <TabsTrigger
                    value="internship"
                    className="px-10 xs:px-4 2xs:px-2 py-2 font-bold "
                  >
                    Internship
                  </TabsTrigger>
                  <TabsTrigger
                    value="parttime"
                    className="px-10 xs:px-4 2xs:px-2 py-2 font-bold"
                  >
                    Part-time
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="fulltime" className="pt-5">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi muốn bổ sung thông tin vào hồ sơ ứng tuyển của mình,
                        tôi có phải ứng tuyển lại không?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi có thể ứng tuyển nhiều vị trí cùng một lúc không?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi có thể ứng tuyển lại cho cùng một vị trí không?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Chuyên viên tuyển dụng tìm kiếm điều gì trong các buổi
                        phỏng vấn qua điện thoại?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi nên chuẩn bị gì cho cuộc phỏng vấn qua điện thoại?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Nhà tuyển dụng mong đợi điều gì trong các buổi phỏng vấn
                        trực tiếp?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Có bao nhiêu vòng phỏng vấn trực tiếp?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Làm thế nào để cập nhật tình trạng đơn ứng tuyển của
                        mình?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Liệu công ty có thể linh hoạt sắp xếp nếu tôi ở nước
                        ngoài trong thời gian phỏng vấn trực tiếp không?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi không thể tham dự buổi phỏng vấn vì tôi có việc gấp.
                        Tôi nên làm gì?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                      <AccordionTrigger className="py-8 font-semibold border-t ">
                        Tôi có thể xem các mẹo phỏng vấn và lời khuyên sự nghiệp
                        từ nhân viên Shopee ở đâu?
                      </AccordionTrigger>
                      <AccordionContent>
                        AXEN Property is a pioneering entity in the field of
                        real estate development and services, with a mission to
                        create premium living spaces that harmoniously blend
                        modern style, elegance, and timeless sustainability.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
                <TabsContent value="internship">There nothing here</TabsContent>
                <TabsContent value="parttime">There nothing here</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Careers;
