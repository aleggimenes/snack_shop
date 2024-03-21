import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Popular() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="popular--section">
      <div className="popular--section--container">
        <h1 className="popupar--section--title"> Popular Burgers </h1>
        <p className="popular--section--subtitle">
          {" "}
          Inspired by recipes and creations of world’s best chefs{" "}
        </p>
        <div className="popupar--section--box-container">
          <motion.div
            className="popupar--section--box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="popupar--section--box--title">CRISPY CHICKEN</h1>
            <p className="popupar--section--box--description">
              {" "}
              This burger features a breaded and fried chicken breast
              <br /> served on a soft bun with lettuce, tomato, <br />
              and mayonnaise
            </p>
            <p className="popupar--section--box--calories"> 270 calories </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <button className="btn-poupar-product">BUY NOW</button>
              <img
                className="popupar--section--box--img"
                src="./img/bestburger/best_1.png"
              />
            </div>
          </motion.div>

          <motion.div
            className="popupar--section--box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.9 }}
            style={{ backgroundColor: "#ff8a00" }}
          >
            <h1 className="popupar--section--box--title">TURKEY BURGER</h1>
            <p className="popupar--section--box--description">
              {" "}
              Burger is a healthier option for those who want to enjoy a <br />
              burger without guilt. It features a ground
              <br /> turkey patty seasoned.
            </p>
            <p className="popupar--section--box--calories"> 310 calories </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <button className="btn-poupar-product">BUY NOW</button>
              <img
                className="popupar--section--box--img"
                src="./img/bestburger/best_3.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
