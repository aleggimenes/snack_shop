import React from "react";
import Footer from "../Footer";
import Testimonial from "../Testimonial";
import ServiceHeader from "../OurServicesHeader";
import OurServiceList from "../OurServiceList";
import OurServiceBanner from "../OurServiceBanner";
import OurDelivery from "../OurDelivery";
export default function OurServices() {
  return (
    <>
      <ServiceHeader />
      <OurServiceList />
      <OurServiceBanner />
      <OurDelivery />
      <Testimonial style={{backgroundColor:'#fff'}}/>
      <Footer />
    </>
  );
}
