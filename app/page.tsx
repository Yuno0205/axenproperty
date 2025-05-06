import { Banner } from "@/components/Banner";
import { Development } from "@/components/Development";

import { Properties } from "@/components/Properties";
import { Solutions } from "@/components/Solution";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Properties />
      <Development />
      <Solutions />
    </>
  );
}
