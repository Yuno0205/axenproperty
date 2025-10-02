import "./globals.css";

// ======================================================
// BƯỚC QUAN TRỌNG: Đăng ký cấu hình ở đây
import { register } from "react-bricks/rsc";
import config from "@/react-bricks/config";
import ReactBricksApp from "@/components/ReactBricksApp";
register(config);
// ======================================================

export const metadata = {
  title: "Axen Property",
  description: "Nền tảng bất động sản thế hệ mới",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactBricksApp>
          {/* children ở đây chính là nội dung từ app/[[...slug]]/page.tsx */}
          <main>{children}</main>
        </ReactBricksApp>
      </body>
    </html>
  );
}
