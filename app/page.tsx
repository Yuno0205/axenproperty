import { Banner } from "@/components/Banner";
import { Development } from "@/components/Development";
import { Properties } from "@/components/Properties";
import { Solutions } from "@/components/Solution";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  return (
    <Suspense fallback={<Skeleton height={"100vh"} />}>
      <Banner />
      <Properties />
      <Development />
      <Solutions />
    </Suspense>
  );
}
