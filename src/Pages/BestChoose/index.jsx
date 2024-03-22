import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";

export default function BestChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <motion.section className="choose--section">
      <motion.div
        className="choose-container-title"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.3 }}
        ref={ref} // Referência para o uso do inView
      >
        <h1 className="choose-h1">Choose & Enjoy</h1>
        <p className="choose-p">
          Inspired by recipes and creations of world’s best chefs
        </p>
      </motion.div>
      <motion.div className="choose-product">
        {data?.burger?.map((item, index) => (
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
              <button className="btn-primary-product">
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
