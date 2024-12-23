import { Banner } from "@/components/Banner";
import { Properties } from "@/components/Properties";
import { Development } from "@/components/Services";
import { ServerWrapper } from "@/components/SeverWrapper";
import { Solutions } from "@/components/Solution";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      {/* <Header /> */}
      <ServerWrapper contentType="banner">
        {(data) => <Banner data={data} />}
      </ServerWrapper>
      {/* <Banner /> */}
      <Properties />
      <Development />
      {/* <Introduction /> */}
      {/* <Projects /> */}
      {/* <FAQ /> */}
      <Solutions />
      {/* <Footer /> */}
    </Fragment>
  );
}
