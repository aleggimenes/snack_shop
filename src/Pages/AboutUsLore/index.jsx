import React, { useState, useEffect } from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
export default function AboutUsLore() {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Para garantir que a animação só seja disparada uma vez
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const [animatedValues, setAnimatedValues] = useState({
    experience: 0,
    locations: 0,
    burgers: 0,
    franchises: 0,
  });

  const animateToValues = {
    experience: 30,
    locations: 16,
    burgers: 50,
    franchises: 86,
  };

  const slowConfig = { tension: 180, friction: 12 };
  const fastConfig = { tension: 280, friction: 30 };

  const animatedExperience = useSpring({
    number: isInView ? animatedValues.experience : 0,
    from: { number: 0 },
    to: { number: animateToValues.experience },
    config: isInView ? fastConfig : slowConfig,
  });

  const animatedLocations = useSpring({
    number: isInView ? animatedValues.locations : 0,
    from: { number: 0 },
    to: { number: animateToValues.locations },
    config: isInView ? fastConfig : slowConfig,
  });

  const animatedBurgers = useSpring({
    number: isInView ? animatedValues.burgers : 0,
    from: { number: 0 },
    to: { number: animateToValues.burgers },
    config: isInView ? fastConfig : slowConfig,
  });

  const animatedFranchises = useSpring({
    number: isInView ? animatedValues.franchises : 0,
    from: { number: 0 },
    to: { number: animateToValues.franchises },
    config: isInView ? fastConfig : slowConfig,
  });

  // Function to update animated values
  const updateAnimatedValues = () => {
    setAnimatedValues(animateToValues);
  };
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
      <div ref={ref} className="about--overrall">
        <div className="bout--overrall--container">
          <animated.h1 className="about--overrall--title">
            {animatedExperience.number.interpolate(Math.floor)}
          </animated.h1>
          <p className="about--overrall--subtitle"> Years Experience </p>
        </div>
        <div className="bout--overrall--container">
          <animated.h1 className="about--overrall--title">
            {animatedLocations.number.interpolate(Math.floor)}
          </animated.h1>
          <p className="about--overrall--subtitle"> Locations </p>
        </div>
        <div className="bout--overrall--container">
          <animated.h1 className="about--overrall--title">
            {animatedBurgers.number.interpolate(Math.floor)}
          </animated.h1>
          <p className="about--overrall--subtitle"> Different Burgers </p>
        </div>
        <div className="bout--overrall--container">
          <animated.h1 className="about--overrall--title">
            {animatedFranchises.number.interpolate(Math.floor)}
          </animated.h1>
          <p className="about--overrall--subtitle"> Franchises </p>
        </div>
      </div>
    </section>
  );
}
