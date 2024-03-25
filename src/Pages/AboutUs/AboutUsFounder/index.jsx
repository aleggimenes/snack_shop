import React, { useEffect, useState } from "react";

import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutUsFounder() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="about-founder-section">
      <div
        className="founder--section--container"
        style={{ marginBottom: "90px" }}
      >
        <div className="founder--section--container--box">
          <motion.div
            whileHover={{
              x: 15,
              y: -20,
              boxShadow: "0px 10px 20px rgba(255, 138, 0, 0.5)",
            }}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <img className="founder--section--img" src="./img/founder.png" />
          </motion.div>
        </div>
        <div className="founder--section-description">
          <h1 className="founder--section--title">
            Good Food For
            <br /> Your All Day Good
            <br /> Mood
          </h1>
          <p className="founder--section--subtitle">
            Whether you're in the mood for a juicy burger, crispy
            <br /> chicken tenders, or a refreshing salad, we've got
            <br /> something to please every palate.
          </p>
          <p
            className="founder--section--subtitle"
            style={{ color: " #FF8A00", fontSize: "25px" }}
          >
            Brooklyn Simmons, Founder
          </p>
        </div>
      </div>
      <div className="delivery--container">
        <motion.div
          className="delivery--container--img"
          initial={{ opacity: 0, x: isVisible ? -90 : 0 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -90 }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          <img src="./img/delivery.png" className="delivery--img " />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.9 }}
          className="delivery--container--info"
          ref={ref}
        >
          <h1 className="delivery--title">
            We Guarantee,
            <br /> 30 Minutes Delivery
          </h1>
          <p className="delivery--subtitle">
            Fastos delivery is a quick and convenient service that has become
            <br />
            increasingly popular in recent years. With the rise of on-demand
            <br />
            delivery apps, it is now easier than ever to get your favorite fast
            <br />
            food delivered right to your doorstep.
          </p>
          <button className="btn-delivery-product">ORDER NOW</button>
        </motion.div>
      </div>
    </section>
  );
}
