"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { useParams } from "next/navigation";
import { data } from "@/lib/data";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
export default function JobDescription() {
  const { slug } = useParams();

  const job = data.find((item) => item.slug === slug);

  return (
    <>
      {job ? (
        <section className={clsx(openSans.className, "w-full h-auto bg-white")}>
          <div className="w-full bg-[#F9F9F9] p-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center xs:flex-col xs:gap-4 xs:text-center">
              <h3 className="font-bold text-2xl">{job.name}</h3>
              <Button className="text-white rounded-full capitalize px-8 py-6">
                <Link href={job?.linkForm} target="_blank">
                  Ứng tuyển ngay
                </Link>
              </Button>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-10">
            <div className="p-4">
              <iframe
                src={job?.linkJD}
                width="100%"
                height="1200px"
                //   className="w-full h-auto"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
