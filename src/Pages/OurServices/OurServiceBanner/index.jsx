import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

Modal.setAppElement("#root");
export default function OurServiceBanner() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  console.log("modal", modalIsOpen);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <section className="service--banner--section">
      <motion.div
        className="service--play"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        onClick={openModal}
      >
        <FaPlay color="white" />
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            width: "100%",
            height: "120%",
            position: "absolute",
            top: "120%",
          },
          content: {
            top: "50%",
            left: "55%",
            right: "auto",
            bottom: "auto",
            marginRight: "-20%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "70%",
            zIndex: 99,
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "90%",
            height: "90%",
            padding: "30px",
          }}
        >
          <iframe
            width="90%"
            height="90%"
            src="https://www.youtube.com/embed/L6yX6Oxy_J8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <IoCloseSharp
            onClick={closeModal}
            color="white"
            style={{ cursor: "pointer", alignSelf: "flex-start" }}
          />
        </div>
      </Modal>
    </section>
  );
}
