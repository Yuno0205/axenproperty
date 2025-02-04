import JobDescription from "@/components/JobDescription";
import { fetchContentfulData } from "@/lib/contentful";
import pdf from "pdf-parse";
import { Suspense } from "react";

export default async function CareersPage() {
  const data = (await fetchContentfulData("recruitment")).items as any;
  const linkJD = data[0].fields.jobDescription.fields.file.url;

  // const response = await fetch(
  //   "https://assets.ctfassets.net/nu40wp00r0zn/50ytGpc8tuKbyVayBhfOhS/be00cd093b6c584902bf95d3dd775efd/-AXEN_Property-_-_JD_Business_Development_Intern.pdf"
  // );
  // const buffer = await response.arrayBuffer();
  // const data = await pdf(Buffer.from(buffer));

  // console.log(data.text);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobDescription data={data} />
    </Suspense>
  );
}
