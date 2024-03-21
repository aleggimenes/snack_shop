import React from "react";
import HeroSection from "../HeroSection";
import BestChoose from "../BestChoose";
import Banner from "../Banner";
import Popular from "../Popular";
import Delivery from "../Delivery";
import BannerMenu from "../BannerMenu";
import Testimonial from "../Testimonial";
import Footer from "../Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <BestChoose />
      <Banner />
      <Popular />
      <Delivery />
      <BannerMenu />
      <Testimonial />
      <Footer/>
    </>
  );
}
