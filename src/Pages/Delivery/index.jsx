import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Delivery() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <section className="delivery--section">
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
          <a href="/menu">
            <button className="btn-delivery-product">ORDER NOW</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
