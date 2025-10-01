import { PageViewer, fetchPage, getBricks, cleanPage } from "react-bricks/rsc";
import config from "@/react-bricks/config";
import { notFound } from "next/navigation";

export default async function Page() {
  // Lấy dữ liệu trang có slug là "home" từ React Bricks.
  // Đây sẽ là trang chủ của bạn.
  const page = await fetchPage({
    slug: "home",
    config,
  }).catch(() => {
    // Nếu không tìm thấy trang, sẽ trả về lỗi 404
    notFound();
  });

  console.log(page);

  // Lấy danh sách tất cả các "viên gạch" đã đăng ký
  const bricks = getBricks();
  console.log(bricks);

  // "Làm sạch" dữ liệu trang để loại bỏ các "viên gạch" không hợp lệ
  const pageOk = cleanPage(page, config.pageTypes || [], bricks);

  // Hiển thị trang bằng PageViewer
  return <PageViewer page={pageOk} />;
}
