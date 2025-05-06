"use client";
import { useLoading } from "@/context/LoadingContext";
import Loading from "../Loading";
import Header from "../Header";
import Footer from "../Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return <Loading />; // Hiển thị trang loading
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
