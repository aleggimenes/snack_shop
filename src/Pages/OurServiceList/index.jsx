import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";

export default function OurServiceList() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="service--section-list">
      <div className="service--section--container">
        {data.service.map((item, index) => (
          <div className="service--section--container--box" key={index}>
            <motion.div
              className="service--section--box"
              whileHover={{
                x: 15,
                y: -15,
                boxShadow: "0px 10px 20px rgba(255, 138, 0, 0.5)",
              }}
              transition={{ duration: 0.5 }}
            >
              <img className="service--section--img" src={item?.src} />
              <h1 className="service--section--title">{item?.name}</h1>
              <p className="service--section--description">
                {item?.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
