import { Banner } from "@/components/Banner";
import { Decor } from "@/components/Decor";
import { Header } from "@/components/Header";
import { Moment } from "@/components/Moment";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Moment />
      <Decor />
    </>
  );
}
