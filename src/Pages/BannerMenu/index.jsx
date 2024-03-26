import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";

export default function BannerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <section className="banner-menu--section">
      <motion.div
        className="banner-menu--container"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.9 }}
        ref={ref} // Referência para o uso do inView
      >
        <a
          className="btn-primary-banner-menu"
          href="/menu"
          initial={{ opacity: 0, y: 100 }} // Define o tamanho inicial como 1.5 vezes o tamanho normal
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 2.5 }} // Define a duração da transição
        >
          VIEW MENU
        </a>
        <motion.h1
          className="banner-menu--h1"
          initial={{ opacity: 0, y: isVisible ? 200 : 0 }} // Define o tamanho inicial como 1.5 vezes o tamanho normal
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 200 }}
          transition={{ duration: 2 }} // Define a duração da transição
          ref={ref}
        >
          LET’S TRY OUR <br />
          DELICIOUS BURGERS
        </motion.h1>

        <motion.img
          src="./img/burger_banner.png"
          className="banner-menu--image"
          initial={{ scale: 1.5 }} // Define o tamanho inicial como 1.5 vezes o tamanho normal
          animate={{ scale: isVisible ? 1 : 0 }} // Define o tamanho final como o tamanho normal
          transition={{ duration: 0.5 }} // Define a duração da transição
          ref={ref}
        />
      </motion.div>
    </section>
  );
}
