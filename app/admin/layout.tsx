// Chúng ta sẽ tạo tệp này ngay sau đây
import "@/app/globals.css"; // Sử dụng CSS toàn cục của bạn
import ReactBricksApp from "./ReactBricksApp";

export const metadata = {
  title: "Axen Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ReactBricksApp là trình bao bọc cần thiết cho khu vực admin */}
        <ReactBricksApp>{children}</ReactBricksApp>
      </body>
    </html>
  );
}
