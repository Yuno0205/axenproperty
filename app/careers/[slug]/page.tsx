// import JobDescription from "@/components/JobDescription";
// import { fetchContentfulData } from "@/lib/contentful";
// import Skeleton from "react-loading-skeleton";

// export default async function CareersPage() {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const data = (await fetchContentfulData("recruitment")).items as any;

//   if (!data) return <Skeleton height={500} />;

//   return (
//     <main>
//       <JobDescription data={data} />
//     </main>
//   );
// }
import React from "react";

const CareerDetailPage = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Trang Chi tiết Tuyển dụng</h1>
      <p>Tạm thời vô hiệu hóa để tích hợp React Bricks.</p>
    </div>
  );
};

export default CareerDetailPage;
