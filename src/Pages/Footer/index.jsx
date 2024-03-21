import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="section--footer">
      <div className="footer--container">
        <div className="footer--elements-1">
          <img src="./img/logo.svg" className="footer--logo--img" />
          <div className="footer--container--icons">
            <a target="_blank" href="https://www.facebook.com/">
              <FaInstagram className="footer--icons" color="#ff8a00" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <FaSquareFacebook className="footer--icons" color="#ff8a00" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <FaTwitter className="footer--icons" color="#ff8a00" />
            </a>
          </div>
        </div>
        <div className="footer--elements-1">
          <h1 className="footer--h1--info ">Contact Info</h1>
          <div className="footer-line" />

          <div
            className="footer--container--icons"
            style={{ flexDirection: "column" }}
          >
            <p className="footer-description">(406) 555-0120</p>
            <p className="footer-description">(406) 555-0104</p>
          </div>
        </div>

        <div className="footer--elements-1">
          <h1 className="footer--h1--info ">Opening Hour</h1>
          <div className="footer-line" />

          <div
            className="footer--container--icons"
            style={{ flexDirection: "column" }}
          >
            <p className="footer-description">Monday- Saturday</p>
            <p style={{ color: "#ff8a00" }} className="footer-description">
              8 AM – 5 PM
            </p>
            <p>Sunday</p>
            <p style={{ color: "#ff8a00" }} className="footer-description">
              12 AM – 8 PM
            </p>
          </div>
        </div>
        <div className="footer--elements-1">
          <h1 className="footer--h1--info ">Subscribe to newsletters</h1>
          <div
            className="footer--container--icons"
            style={{ flexDirection: "column" }}
          >
            <input
              type="email"
              style={{
                borderWidth: "1px solid white",
                backgroundColor: "transparent",
                borderTopWidth: "0px",
                borderLeftWidth: "0px",
                borderRightWidth: "0px",
                color:'white'
              }}
              placeholder="e-mail"
            />
          </div>
        </div>
      </div>
      <div className="footer-line-2" />
      <div className="footer-buttons-container">
        <div className="footer-buttons-box">
          <h3 className="footer-h1--button">home</h3>
          <h3 className="footer-h1--button">about us</h3>
          <h3 className="footer-h1--button">our menu</h3>
          <h3 className="footer-h1--button">our team</h3>
        </div>
        <p>© Fastos. All Rights Reserved 2024.</p>
      </div>
    </section>
  );
}
