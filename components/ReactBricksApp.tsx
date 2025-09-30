"use client";

import { useRouter } from "next/navigation";
import { ReactBricks } from "react-bricks/rsc";
import config from "@/react-bricks/config";

const ReactBricksApp = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const reactBricksConfig = {
    ...config,
    // Hàm navigate này giúp trình chỉnh sửa của React Bricks
    // có thể chuyển trang trong ứng dụng Next.js của bạn.
    navigate: (path: string) => {
      router.push(path);
    },
    // Bạn có thể thêm các cấu hình khác ở đây sau...
  };

  return (
    <ReactBricks {...reactBricksConfig}>
      {children as React.ReactNode}
    </ReactBricks>
  );
};

export default ReactBricksApp;
