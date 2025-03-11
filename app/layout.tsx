import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const proximaNova = localFont({
  src: "./fonts/ProximaNovaRegular.otf",
  variable: "--font-proxima-nova",
  weight: "400 500 600 700 800 900",
});

// Xóa dòng này để không xuất proximaBold
const proximaBold = localFont({
  src: "./fonts/ProximaNovaBold.otf",
  variable: "--font-proxima-nova-bold",
  weight: "400 500 600 700 800 900",
});

const avenir = localFont({
  src: "./fonts/AvenirLTStd-Book.otf",
  variable: "--font-avenir",
  weight: "400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Axen Property",
  description: "Axen Property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${proximaNova.variable} ${proximaBold.variable} ${avenir.variable} antialiased bg-[#f4f4f4]`}
      >
        <Suspense fallback={<Skeleton count={3} />}>
          <Header />
        </Suspense>
        {children}
        <Suspense fallback={<Skeleton count={3} />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
