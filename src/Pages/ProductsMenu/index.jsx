import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";

export default function ProductsMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBurger, setIsBurger] = useState(true);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <motion.section className="choose--product--section">
      <motion.div
        className="choose-product-buttons"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.3 }}
        ref={ref} // Referência para o uso do inView
      >
        <button
          className="choose-product-button"
          onClick={() => setIsBurger(true)}
          style={{
            backgroundColor: isBurger ? "#ec3333" : "white",
            color: isBurger ? "white" : "black",
            border: isBurger ? "none" : "1px solid black",
          }}
        >
          BURGERS
        </button>
        <button
          onClick={() => setIsBurger(false)}
          className="choose-product-button"
          style={{
            backgroundColor: !isBurger ? "#ec3333" : "white",
            color: !isBurger ? "white" : "black",
            border: !isBurger ? "none" : "1px solid black",
          }}
        >
          DRINKS
        </button>
      </motion.div>
      <motion.div className="choose-product">
        {isBurger
          ? data?.burger?.map((item, index) => (
              <motion.div
                className="choose-product-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                key={index}
              >
                <div className="choose-product-container-img">
                  <motion.img
                    className="choose-product-img"
                    src={item?.src}
                    whileHover={{ scale: 1.1 }}
                  />
                  <p className="choose-product-price">{item.value}</p>
                </div>
                <div className="choose-product-description-container">
                  <h1 className="choose-product-title">{item.name}</h1>
                  <p className="choose-product-p">{item?.description}</p>
                  <button className="btn-primary-product--test">
                    <div className="choose-product-container-button">
                      ADD TO CART
                      <FaShoppingCart
                        className="choose-product-icon-cart"
                        color="black"
                      />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))
          : data?.drink?.map((item, index) => (
              <motion.div
                className="choose-product-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                key={index}
              >
                <div className="choose-product-container-img">
                  <motion.img
                    className="choose-product-img"
                    src={item?.src}
                    whileHover={{ scale: 1.1 }}
                  />
                  <p className="choose-product-price">{item.value}</p>
                </div>
                <div className="choose-product-description-container">
                  <h1 className="choose-product-title">{item.name}</h1>
                  <p className="choose-product-p">{item?.description}</p>
                  <button className="btn-primary-product--test">
                    <div className="choose-product-container-button">
                      ADD TO CART
                      <FaShoppingCart
                        className="choose-product-icon-cart"
                        color="black"
                      />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
      </motion.div>
    </motion.section>
  );
}
