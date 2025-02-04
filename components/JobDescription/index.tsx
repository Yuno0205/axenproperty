"use client";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
const JobDescription = ({ data }: { data: any }) => {
  //     const { slug } = useParams();

  //   const job = data.find((item) => item.slug === slug);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/api/pdf")
      .then((res) => res.json())
      .then((data) => setText(data.text))
      .catch(console.error);
  }, []);

  interface JobData {
    title: string;
    aboutCompany: string;
    aboutProject: string;
    jobDescription: string;
    jobRequirements: string;
    benefits: string;
    workingTime: string;
    location: string;
    contact: string;
  }

  const parseJobText = (text: string): JobData => {
    const regex = /(?<=^|\n)([^:\n]+):\s*([\s\S]*?)(?=\n[A-ZÀ-Ỹ][^:\n]+:|$)/g;
    const sections: Partial<JobData> = {};

    let match;
    while ((match = regex.exec(text)) !== null) {
      const key = match[1].trim();
      const value = match[2].trim();

      switch (key.toLowerCase()) {
        case "về axen property":
          sections.aboutCompany = value;
          break;
        case "về dự án tại axen property":
          sections.aboutProject = value;
          break;
        case "mô tả công việc":
          sections.jobDescription = value;
          break;
        case "yêu cầu công việc":
          sections.jobRequirements = value;
          break;
        case "phúc lợi":
          sections.benefits = value;
          break;
        case "thời gian làm việc":
          sections.workingTime = value;
          break;
        case "địa chỉ làm việc":
          sections.location = value;
          break;
        case "liên hệ":
          sections.contact = value;
          break;
        default:
          if (!sections.title) sections.title = key; // Lấy dòng đầu tiên làm tiêu đề
      }
    }

    return {
      title: sections.title || "Không có tiêu đề",
      aboutCompany: sections.aboutCompany || "",
      aboutProject: sections.aboutProject || "",
      jobDescription: sections.jobDescription || "",
      jobRequirements: sections.jobRequirements || "",
      benefits: sections.benefits || "",
      workingTime: sections.workingTime || "",
      location: sections.location || "",
      contact: sections.contact || "",
    };
  };

  const job = parseJobText(text);
  console.log(job);

  return (
    <section className={clsx(openSans.className, "w-full h-auto bg-white")}>
      <div className="w-full bg-[#F9F9F9] p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center xs:flex-col xs:gap-4 xs:text-center">
          <h3 className="font-bold text-2xl">Test</h3>
          <Button className="text-white rounded-full capitalize px-8 py-6">
            {/* <Link href={job?.linkForm} target="_blank">
              Ứng tuyển ngay
            </Link> */}
          </Button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="p-4">
          <div>
            {text.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-3 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {text.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
