import { Banner } from "@/components/Banner";
import { Decor } from "@/components/Decor";
import { Discover } from "@/components/Discover";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inspire } from "@/components/Inspire";
import { Moment } from "@/components/Moment";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner />
      {/* <Moment />
      <Decor />
      <Discover />
      <Inspire />
      <Footer /> */}
    </Fragment>
  );
}
