// components/ServerWrapper.tsx
import { fetchContentfulData } from "@/lib/contentful";
import { ReactNode } from "react";

type ServerWrapperProps = {
  contentType: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (data: any) => ReactNode; // Pass fetched data to the child component as a function
};

export async function ServerWrapper({
  contentType,
  children,
}: ServerWrapperProps) {
  const rawData = await fetchContentfulData(contentType);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractedData = rawData.items.map((item: any) => item.fields);

  return <>{children(extractedData[0])}</>;
}
