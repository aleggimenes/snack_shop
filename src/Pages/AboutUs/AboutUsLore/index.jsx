import React, { useState, useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";

export default function AboutUsLore() {
  return (
    <section className="section--about">
      <div className="about--container">
        <div className="about--info-first">
          <h1 className="about--info-first-title">
            We Maintain Craft Quality
            <br />
            <h1 className="about--info-first-title" style={{ color: "red" }}>
              Since 1992
            </h1>
          </h1>
          <p className="about--info-first-description">
            Our story begins with a love for good food and a passion for
            <br />
            customer service. [Founder Name] started the restaurant as a<br />{" "}
            small, family-owned business, serving up classic American fare
            <br /> with a smile. Over time, our reputation for quality and
            <br /> convenience grew, and we expanded to multiple locations
            across
            <br /> the country.
          </p>
        </div>
        <div className="about--info-second">
          <div className="about--info-second-container">
            <h1 className="about--info-second-title">The love of the craft</h1>
            <p className="about--info-second-description">
              We believe that fast food should never compromise on taste or
              quality. That's why we use only the freshest ingredients,
              locally-sourced whenever possible, to create our mouth-watering
              menu items.
            </p>
          </div>
          <div className="about--info-second-container">
            <h1 className="about--info-second-title">We serve you the best</h1>
            <p className="about--info-second-description">
              We believe that fast food should never compromise on taste or
              quality. That's why we use only the freshest ingredients,
              locally-sourced whenever possible, to create our mouth-watering
              menu items.
            </p>
          </div>
        </div>
      </div>
      <div className="about--overrall">
        <div className="bout--overrall--container">
          <h1 className="about--overrall--title">30+</h1>
          <p className="about--overrall--subtitle"> Years Experience </p>
        </div>
        <div className="bout--overrall--container">
          <h1 className="about--overrall--title">16+</h1>
          <p className="about--overrall--subtitle"> Locations </p>
        </div>
        <div className="bout--overrall--container">
          <h1 className="about--overrall--title">50</h1>
          <p className="about--overrall--subtitle"> Different Burgers </p>
        </div>
        <div className="bout--overrall--container">
          <h1 className="about--overrall--title">86+</h1>
          <p className="about--overrall--subtitle"> Franchises </p>
        </div>
      </div>
      <div>
        <h1
          className="about--info-first-title"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          FastFood Is Where Burgers Are About
          <h1 className="about--info-first-title" style={{ color: "#ff8a00" }}>
            {" "}
            Something Bigger
          </h1>
        </h1>
        <p
          className="about--info-first-description"
          style={{ textAlign: "center" }}
        >
          At Fastos, we believe that fast food should never compromise on taste
          or quality. That's why we use only the freshest ingredients,
          locally-sourced whenever possible, to create our mouth-watering menu
          items.
        </p>
      </div>
    </section>
  );
}
