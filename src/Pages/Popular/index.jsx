import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CartModal from "../../Component/Cart";
import { Link } from "react-router-dom";
export default function Popular() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Adicione um estado para o carrinho
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    // Verifica se o produto já está no carrinho
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Se o produto já estiver no carrinho, aumenta a quantidade
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart); // Atualiza o carrinho
    } else {
      // Se o produto não estiver no carrinho, adiciona com quantidade 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const updateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
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
            <a
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                height: "100%",
              }}
              href="/menu"
            >
              <button className="btn-poupar-product">BUY NOW</button>
              <img
                className="popupar--section--box--img"
                src="./img/bestburger/best_1.png"
              />
            </a>
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
            <a
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
            </a>
          </motion.div>
          {isCartOpen && (
            <CartModal
              isOpen={isCartOpen}
              onClose={closeCart}
              cartItems={cartItems}
              selectedProduct={selectedProduct}
              updateCartItems={updateCartItems}
            />
          )}
        </div>
      </div>
    </section>
  );
}
