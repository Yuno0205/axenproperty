import ReactBricksApp from "../components/ReactBricksApp";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import QueryProviders from "@/components/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Bọc toàn bộ ứng dụng trong Providers */}
        <QueryProviders>
          <ReactBricksApp>
            <Header />
            {children}
            <Footer />
          </ReactBricksApp>
        </QueryProviders>
      </body>
    </html>
  );
}
