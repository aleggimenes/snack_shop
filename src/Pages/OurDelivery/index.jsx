import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Modal from "react-modal";
import AnimatedSVG from "../../Component/AnimatedSVG";
export default function OurDelivery() {
  return (
    <section className="service--delivery--section">
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={{
          y: [0, -10, 0, 10, 0],
          transition: { duration: 1.2, ease: "linear", repeat: Infinity },
        }}
        className="service--svg"
      >
        <AnimatedSVG />
      </motion.div>
      <div className="service--delivery--info">
        <h1 className="service--delivery--title">
          Your Favorite Burger,
          <br />
          On The Way!
        </h1>
        <p className="service--delivery--description">
          From classic cheeseburgers to unique, gourmet creations, the world
          <br /> of burgers is vast and varied. At our fast food site, we offer
          a range of
          <br />
          burger options to suit every taste and preference.
        </p>
        <div className="service--delivery--info--container">
          <div className="service--delivery--info--box ">
            <img
              src="./img/our_services/service_3.png"
              style={{ width: "70px", height: "70px" }}
            />
            <p className="service--delivery--info--box--p">
              Delivery in
              <br /> 30 minutes
            </p>
          </div>
          <div className="service--delivery--info--box">
            <img
              src="./img/our_services/service_3.png"
              style={{ width: "70px", height: "70px" }}
            />
            <p className="service--delivery--info--box--p">
            Free Shipping
              <br /> From 75$
            </p>
          </div>
          <div className="service--delivery--info--box">
            <img
              src="./img/our_services/service_5.png"
              style={{ width: "70px", height: "70px" }}
            />
            <p className="service--delivery--info--box--p">
              Delivery on
              <br /> Your Doorstep
            </p>
          </div>
        </div>
      </div>
      {/* <img className="service--road--img" src="./img/road.png" /> */}
    </section>
  );
}
