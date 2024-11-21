import { Banner } from "@/components/Banner";
import { FAQ } from "@/components/F&Q";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

import { Introduction } from "@/components/Introduction";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solution";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Introduction />
      <Services />
      <Projects />
      <FAQ />
      <Solutions />
      <Footer />
    </Fragment>
  );
}
