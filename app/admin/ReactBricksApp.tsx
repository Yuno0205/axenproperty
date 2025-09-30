"use client";

import { useRouter } from "next/navigation";
import { ReactBricks } from "react-bricks/rsc/client";
import config from "@/react-bricks/config";
import { ReactNode } from "react";

export default function ReactBricksApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const reactBricksConfig = {
    ...config,
    navigate: (path: string) => {
      router.push(path);
    },
  };

  return (
    <ReactBricks {...reactBricksConfig}>{children as ReactNode}</ReactBricks>
  );
}
