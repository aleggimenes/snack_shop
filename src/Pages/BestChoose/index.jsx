import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import data from "../../data/data.json";
import { useInView } from "react-intersection-observer";
import CartModal from "../../Component/Cart";
export default function BestChoose() {
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
              <button
                className="btn-primary-product"
                onClick={() => {
                  addToCart(item);
                  openCart(); // Abre o modal do carrinho
                }}
              >
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
      {isCartOpen && (
        <CartModal
          isOpen={isCartOpen}
          onClose={closeCart}
          cartItems={cartItems}
          selectedProduct={selectedProduct}
          updateCartItems={updateCartItems}
        />
      )}
    </motion.section>
  );
}
