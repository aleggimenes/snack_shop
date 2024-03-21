import Reac, { useEffect, useState } from "react";
import "./style.css";
import { FaRegStar } from "react-icons/fa";
import data from "../../data/data.json";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Testimonial() {
  const [about, setAbout] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="testimonial--section">
      <div className="testimonial--section--container">
        <h1 className="testimonial--section--title">Hear From Our People</h1>
        <p className="testimonial--section--subtitle">
          Got something different for you, Fast Food Fastos.
        </p>
        <div className="testimonial--section--opinion-container">
          <p className="testimonial--section--opinion">
            {about === 0
              ? `${data?.testimonial[0].description}`
              : about === 1
              ? `${data?.testimonial[1].description}`
              : `${data?.testimonial[2].description}`}
          </p>
        </div>
        <div className="testimonial--section--box">
          <motion.div
            initial={{ opacity: 0, y: isVisible ? 90 : 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 90 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="testimonial--section--info--person"
            onClick={() => setAbout(0)}
            style={{
              borderRadius: about === 0 ? "10px" : "0px",
              boxShadow:
                about === 0 ? "5px 5px 5px 5px rgba(0, 0, 0, 0.1)" : "none",
              backgroundColor: about === 0 ? "white" : "transparent",
            }}
          >
            <img
              className="testimonial--section--img--person "
              src={data?.testimonial[0].src}
            />
            <motion.div className="testimonial--section--box--person">
              <p className="testimonial--section--name--person">
                {data?.testimonial[0].name}
              </p>
              <div className="testimonial--section--box--stars">
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: isVisible ? 90 : 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 90 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="testimonial--section--info--person"
            onClick={() => setAbout(1)}
            style={{
              borderRadius: about === 1 ? "10px" : "0px",
              boxShadow:
                about === 1 ? "5px 5px 5px 5px rgba(0, 0, 0, 0.1)" : "none",
              backgroundColor: about === 1 ? "white" : "transparent",
            }}
          >
            <img
              className="testimonial--section--img--person "
              src={data?.testimonial[1].src}
            />
            <div className="testimonial--section--box--person">
              <p className="testimonial--section--name--person">
                {data?.testimonial[1].name}
              </p>
              <div className="testimonial--section--box--stars">
                <FaStar
                  color="#ff8a00"
                  style={{ color: "#ff8a00" }}
                  height={30}
                  width={30}
                />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: isVisible ? 90 : 0 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 90 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            className="testimonial--section--info--person"
            onClick={() => setAbout(2)}
            style={{
              borderRadius: about === 2 ? "10px" : "0px",
              boxShadow:
                about === 2 ? "5px 5px 5px 5px rgba(0, 0, 0, 0.1)" : "none",
              backgroundColor: about === 2 ? "white" : "transparent",
            }}
          >
            <img
              className="testimonial--section--img--person "
              src={data?.testimonial[2].src}
            />
            <div className="testimonial--section--box--person">
              <p className="testimonial--section--name--person">
                {data?.testimonial[2].name}
              </p>
              <div className="testimonial--section--box--stars">
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
                <FaStar color="#ff8a00" height={30} width={30} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
