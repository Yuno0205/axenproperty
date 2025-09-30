// app/layout.tsx
import ReactBricksApp from "../components/ReactBricksApp"; // Import component bạn vừa tạo
import Header from "@/components/Header"; // Giữ lại Header và Footer hiện tại của bạn
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactBricksApp>
          <Header />
          {children}
          <Footer />
        </ReactBricksApp>
      </body>
    </html>
  );
}
