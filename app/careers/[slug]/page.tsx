import JobDescription from "@/components/JobDescription";
import { fetchContentfulData } from "@/lib/contentful";
import { Suspense } from "react";

export default async function CareersPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await fetchContentfulData("recruitment")).items as any;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobDescription data={data} />
    </Suspense>
  );
}
