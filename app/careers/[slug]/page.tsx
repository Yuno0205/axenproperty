import JobDescription from "@/components/JobDescription";
import { fetchContentfulData } from "@/lib/contentful";
import { Suspense } from "react";
import * as mammoth from "mammoth";

export default async function CareersPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await fetchContentfulData("recruitment")).items as any;

  const linkJD = data[0].fields.jobDescription.fields.file.url;

  const docxUrl = `https:${linkJD}`;

  const response = await fetch(docxUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch .docx file from: ${docxUrl}`);
  }

  // 2. Lấy nội dung dưới dạng ArrayBuffer
  const arrayBuffer = await response.arrayBuffer();

  // 3. Gọi mammoth.convertToHtml
  const result = await mammoth.convertToHtml({
    buffer: Buffer.from(arrayBuffer),
  });
  console.log(result.value);
  // Chuỗi HTML

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobDescription data={data} text={result.value} />
    </Suspense>
  );
}
