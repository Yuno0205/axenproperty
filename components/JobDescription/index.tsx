"use client";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import "./style.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import mammoth from "mammoth";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

type Data = {
  slug: string;
  linkForm: string;
  name: string;
  fields: string;
  experience: string;
  location: string;
  jobDescription?: { fields: { file?: { url?: string } } };
};

const JobDescription = ({ data: jobs }: { data: any[] }) => {
  const [data, setData] = useState<Data | null>(null);
  const { slug } = useParams();
  const [htmlContent, setHtmlContent] = useState<string>("");

  // Lấy dữ liệu dựa trên slug
  useEffect(() => {
    const job = jobs.find((item) => item.fields.slug === slug);
    if (job) {
      setData(job.fields);
    } else {
      console.warn("Not found slug:", slug);
    }
  }, [slug, jobs]);

  // Fetch file DOCX và chuyển thành HTML
  useEffect(() => {
    const fetchDocx = async () => {
      if (!data?.jobDescription?.fields?.file?.url) {
        console.warn("Không có file DOCX để fetch");
        return;
      }

      try {
        const docxUrl = `https:${data.jobDescription.fields.file.url}`;
        console.log("Fetching DOCX from:", docxUrl);

        const response = await fetch(docxUrl);
        if (!response.ok) throw new Error(`Failed to fetch DOCX: ${docxUrl}`);

        const arrayBuffer = await response.arrayBuffer();
        if (!arrayBuffer || arrayBuffer.byteLength === 0) {
          throw new Error("Empty DOCX file received");
        }

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Lỗi khi tải DOCX:", error);
      }
    };

    fetchDocx().catch((err) =>
      console.error("Unhandled promise rejection:", err)
    );
  }, [data]);

  return (
    data && (
      <section className={clsx(openSans.className, "w-full h-auto bg-white")}>
        <div className="w-full bg-[#F9F9F9] p-4">
          <div className="max-w-5xl mx-auto flex justify-between items-center xs:flex-col xs:gap-4 xs:text-center">
            <h3 className="font-bold text-2xl">{data.name}</h3>
            <Button className="text-white rounded-full capitalize px-8 py-6">
              <Link href={data.linkForm} target="_blank">
                Ứng tuyển ngay
              </Link>
            </Button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <div
            className="p-4 prose leading-7"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>
    )
  );
};

export default JobDescription;
