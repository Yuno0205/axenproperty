import { Banner } from "@/components/Banner";
import { Properties } from "@/components/Properties";
import { Development } from "@/components/Development";
import { ServerWrapper } from "@/components/SeverWrapper";
import { Solutions } from "@/components/Solution";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Header /> */}
      <ServerWrapper contentType="banner">
        {(data) => <Banner data={data} />}
      </ServerWrapper>
      <ServerWrapper contentType="properties">
        {(data) => <Properties data={data} />}
      </ServerWrapper>

      <ServerWrapper contentType="development">
        {(data) => <Development data={data} />}
      </ServerWrapper>

      <ServerWrapper contentType="solution">
        {(data) => <Solutions data={data} />}
      </ServerWrapper>

      {/* <Footer /> */}
    </Suspense>
  );
}
