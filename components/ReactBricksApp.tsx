"use client";

import { useRouter } from "next/navigation";
import { ReactBricks } from "react-bricks/rsc/client";
import NextLink from "@/react-bricks/NextLink";
import config from "@/react-bricks/config";

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
    renderLocalLink: NextLink,
  };

  return <ReactBricks {...reactBricksConfig}>{children}</ReactBricks>;
}
