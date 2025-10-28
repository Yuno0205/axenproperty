import JobDescription from "@/components/JobDescription";
import { fetchContentfulData } from "@/lib/contentful";
import Skeleton from "react-loading-skeleton";

export default async function CareersPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (await fetchContentfulData("recruitment")).items as any;

  if (!data) return <Skeleton height={500} />;

  return (
    <main>
      <JobDescription data={data} />
    </main>
  );
}
