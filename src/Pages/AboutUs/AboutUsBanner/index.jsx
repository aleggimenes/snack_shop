import React, { useEffect, useContext, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import data from "../../../data/data.json";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AboutUsBanner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="about--banner--section">
      <motion.div
        className="about--banner-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
      <Slider {...settings} style={{ backgroundColor: "white", width: "80%", padding:'30px', borderRadius: '20px'}}>
        <div>
          <div className="about--banner-carrosel-person">
            <img
              src={data.testimonial[0].src}
              className="about--banner-carrosel-person-icon"
            />
          </div>
          <div className="about--banner-carrosel-person-container">
            <h1 className="about--banner-carrosel-person--name">
              {data.testimonial[0].name}
            </h1>
            <div className="bout--banner-carrosel-person-stars">
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
            </div>
          </div>
          <div>{data.testimonial[0].description}</div>
        </div>
        <div>
          <div className="about--banner-carrosel-person">
            <img
              src={data.testimonial[1].src}
              className="about--banner-carrosel-person-icon"
            />
          </div>
          <div className="about--banner-carrosel-person-container">
            <h1 className="about--banner-carrosel-person--name">
              {data.testimonial[1].name}
            </h1>
            <div className="bout--banner-carrosel-person-stars">
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
            </div>
          </div>
          <div>{data.testimonial[1].description}</div>
        </div>

        <div>
          <div className="about--banner-carrosel-person">
            <img
              src={data.testimonial[2].src}
              className="about--banner-carrosel-person-icon"
            />
          </div>
          <div className="about--banner-carrosel-person-container">
            <h1 className="about--banner-carrosel-person--name">
              {data.testimonial[2].name}
            </h1>
            <div className="bout--banner-carrosel-person-stars">
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
              <FaStar color="#ff8a00" height={30} width={30} />
            </div>
          </div>
          <div>{data.testimonial[2].description}</div>
        </div>
      </Slider>
      </motion.div>
    </section>
  );
}
