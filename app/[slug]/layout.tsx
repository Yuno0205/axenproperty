// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import { Suspense } from "react";
// import Skeleton from "react-loading-skeleton";

// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "vi" }];
// }

// export default function LocaleLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   return (
//     <>
//       <Suspense fallback={<Skeleton height={100} />}>
//         <Header />
//       </Suspense>
//       {children}
//       <Suspense fallback={<Skeleton height={100} />}>
//         <Footer />
//       </Suspense>
//     </>
//   );
// }
