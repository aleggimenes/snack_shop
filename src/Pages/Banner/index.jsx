import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";

export default function Banner() {
  const [maxActive, setMaxActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1380) {
        setMaxActive(true); // Atualiza o estado quando a largura é menor ou igual a 1200
      } else {
        setMaxActive(false); // Atualiza o estado quando a largura é maior que 1200
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section className="banner--section" ref={ref}>
      {maxActive ? (
        <div className="banner--container">
          <div className="banner--container--right">
            <img src="./img/burger_banner.png" className="banner-img " />
          </div>
          <div className="banner--container--left">
            <h1 className="banner--container--left-h1">
              From Our Chef With Love
            </h1>
            <p className="banner--container--left-p">
              With a wide range of options to choose from, including burgers,
              pizzas, sandwiches, and more, fast food services offer something
              for everyone. Whether you're in a rush to get to work or simply
              don't feel like cooking, fast food services provide a convenient
              solution.
            </p>
            <a href="/ourservices">
              <button className="btn-primary">OUR SERVICES</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="banner--container">
          <div className="banner--container--left">
            <h1 className="banner--container--left-h1">
              From Our Chef With Love
            </h1>
            <p className="banner--container--left-p">
              With a wide range of options to choose from, including burgers,
              pizzas, sandwiches, and more, fast food services offer something
              for everyone. Whether you're in a rush to get to work or simply
              don't feel like cooking, fast food services provide a convenient
              solution.
            </p>
            <button className="btn-primary">OUR SERVICES</button>
          </div>
          <div className="banner--container--right">
            <motion.img
              src="./img/burger_banner.png"
              className="banner-img"
              initial={{ scale: 1.5 }} // Define o tamanho inicial como 1.5 vezes o tamanho normal
              animate={{ scale: isVisible ? 1 : 0 }} // Define o tamanho final como o tamanho normal
              transition={{ duration: 1 }} // Define a duração da transição
              ref={ref}
            />
            <div className="banner-icon-container">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                src="./img/banner_price.png"
                className="banner-icon-img"
              />
              <p className="banner-icon-paragraph">
                From <br /> $6.99
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
