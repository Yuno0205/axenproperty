import { Banner } from "@/components/Banner";
import { Decor } from "@/components/Decor";
import { Discover } from "@/components/Discover";
import { Header } from "@/components/Header";
import { Inspire } from "@/components/Inspire";
import { Moment } from "@/components/Moment";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Moment />
      <Decor />
      <Discover />
      <Inspire />
    </>
  );
}
