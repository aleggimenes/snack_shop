import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { FaPlayCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

Modal.setAppElement("#root");
export default function HeroSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  console.log(modalIsOpen);
  return (
    <section className="hero--section">
      <div className="bg-video">
        <div className="video-contain">
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="./video/video_bg.mp4" />
          </video>
        </div>
      </div>
      <motion.div
        className="banner"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="banner-contain">
          <p className="banner-contain-text">
            it's a good time for the great taste of burgers
          </p>
        </div>
        <motion.h1
          className="banner-h1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          The best food of your <br />
          choice
        </motion.h1>
        <motion.p
          className="banner-contain-p"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Fastos delivery is a quick and convenient service that has become
          increasingly popular in recent years.
          <br /> With the rise of on-demand delivery apps, it is now easier than
          ever to get your favorite fast food
          <br /> delivered right to your doorstep.
        </motion.p>
        <div className="banner-contain-buttons">
          <motion.button
            className="btn-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            BUY NOW
          </motion.button>
          <motion.span className="banner-container-span">
            <motion.a className="banner-container-a" onClick={openModal}>
              HOW TO ORDER
            </motion.a>
            <FaPlayCircle
              className="banner-container-icon"
              onClick={openModal}
            />
          </motion.span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              width: "100%",
              height: "100%",
              position: "absolute",
            },
            content: {
              top: "55%",
              left: "55%",
              right: "auto",
              bottom: "auto",
              marginRight: "-20%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "70%",
              zIndex: 99,
              border: "none",
              backgroundColor:'transparent'
            },
          }}
        >
          <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between',width:'90%', height:'90%', padding:'30px'}}>
            <iframe
              width="90%"
              height="90%"
              src="https://www.youtube.com/embed/L6yX6Oxy_J8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            />
            <IoCloseSharp
              onClick={closeModal}
              color="white"
              style={{ cursor: "pointer", alignSelf: "flex-start" }}
            />
          </div>
        </Modal>
      </motion.div>
    </section>
  );
}
