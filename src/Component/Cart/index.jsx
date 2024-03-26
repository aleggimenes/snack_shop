import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const CartModal = ({
  isOpen,
  onClose,
  cartItems = [],
  selectedProduct,
  updateCartItems,
}) => {
  const [cartItemsLocalStorage, setCartItemsLocalStorage] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartItemsLocalStorage);
    if (storedCartItems && storedCartItems.length > 0) {
      // Verifica se há itens no localStorage
      setCartItemsLocalStorage(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Atualiza o localStorage sempre que houver alterações em cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredCartItems = cartItemsLocalStorage.reduce((acc, currentItem) => {
    const existingProduct = acc.find((item) => item.id === currentItem.id);
    if (!existingProduct) {
      return [...acc, currentItem];
    }
    return acc;
  }, []);
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of filteredCartItems) {
      const price = parseFloat(item.value.replace(" USD", ""));
      const productSubtotal = price * item.quantity;
      subtotal += productSubtotal;
    }
    return subtotal.toFixed(2);
  };
  const incrementProduct = (productId) => {
    const updatedCart = filteredCartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartItems(updatedCart);
    setCartItemsLocalStorage(updatedCart);
  };
  const decrementProduct = (productId) => {
    const updatedCart = filteredCartItems.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = item.quantity - 1;
        if (updatedQuantity === 0) {
          removeProduct(productId);
        } else {
          return { ...item, quantity: updatedQuantity };
        }
      }
      return item;
    });
    updateCartItems(updatedCart);
    setCartItemsLocalStorage(updatedCart);
  };
  const removeProduct = (productId) => {
    const updatedCart = filteredCartItems.filter(
      (item) => item.id !== productId
    );
    updateCartItems(updatedCart);
    setCartItemsLocalStorage(updatedCart);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Your Cart"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "60%",
          zIndex: 99,
          border: "none",
          backgroundColor: "white",
          position: "fixed",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "22px",
          width: "90%",
          height: "90%",
          padding: "30px",
        }}
      >
        <h2>Your Cart</h2>
        <div style={{ width: "100%", border: "0.3px solid black" }} />

        {filteredCartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              gap: "15px",
            }}
          >
            <img style={{ width: "90px", height: "90px" }} src={item.src} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <h3>{item.name}</h3>
              <p>{item.value}</p>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontWeight: "900",
                  fontSize: "18px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={() => removeProduct(item.id)}
              >
                REMOVE
              </button>
            </div>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                padding: "8px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                gap: "5px",
              }}
            >
              <button onClick={() => decrementProduct(item?.id)}>-</button>{" "}
              <span style={{ margin: "5px 5px 5px 5px" }}>
                {item?.quantity}
              </span>{" "}
              <button onClick={() => incrementProduct(item?.id)}>+</button>{" "}
            </div>
          </div>
        ))}

        <div style={{ width: "100%", border: "1px solid black" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>Subtotal</h2>
          <h2 style={{ color: "#ff8a00" }}>${calculateSubtotal()}</h2>
        </div>
        <button
          onClick={onClose}
          className="btn-primary"
          style={{ width: "100%", alignSelf: "center" }}
        >
          Continue to check
        </button>
      </div>
    </Modal>
  );
};

export default CartModal;
