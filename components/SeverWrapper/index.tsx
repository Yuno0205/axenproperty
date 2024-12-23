// components/ServerWrapper.tsx
import { ReactNode } from "react";
import { fetchContentfulData } from "@/lib/contentful";

type ServerWrapperProps = {
  contentType: string; // Specify the Contentful content type
  children: (data: any) => ReactNode; // Pass fetched data to the child component as a function
};

export async function ServerWrapper({
  contentType,
  children,
}: ServerWrapperProps) {
  const rawData = await fetchContentfulData(contentType);

  // Lấy `fields` từ `items`
  const extractedData = rawData.items.map((item: any) => item.fields);

  return <>{children(extractedData[0])}</>;
}
