import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Modal from "react-modal";

export default function ServiceHeader() {
  return (
    <section className="service--header--section">
      <motion.h1
        className="service--header-h1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        OUR SERVICES
      </motion.h1>
    </section>
  );
}
