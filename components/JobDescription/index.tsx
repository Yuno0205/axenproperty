"use client";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { useEffect } from "react";
import { Button } from "../ui/button";
import "./style.css";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobDescription = ({ data, text }: any) => {
  console.log(data);

  //     const { slug } = useParams();

  //   const job = data.find((item) => item.slug === slug);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // const [text, setText] = useState("");

  useEffect(() => {
    // fetch("/api/pdf")
    //   .then((res) => res.json())
    //   .then((data) => setText(data.text))
    //   .catch(console.error);
  }, []);

  console.log(text);

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
        <div
          className="p-4 prose leading-7"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  );
};

export default JobDescription;
