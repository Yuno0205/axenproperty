import { Banner } from "@/components/Banner";
import { Decor } from "@/components/Decor";
import { Discover } from "@/components/Discover";
import { Header } from "@/components/Header";
import { Moment } from "@/components/Moment";
import MyCarousel from "@/components/MySlider";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Moment />
      <Decor />
      <Discover />
    </>
  );
}
