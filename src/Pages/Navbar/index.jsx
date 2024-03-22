import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";
import "./style.css";
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a href="/" spy="true" smooth="true" offset={-70} duration={500}>
        <img src="./img/logo.svg" className="navbar--img" />
      </a>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <a
              onClick={closeMenu}
              activeclass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/menu"
              className="navbar--content"
            >
              MENU
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              activeclass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/aboutUs"
              className="navbar--content"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              activeclass="navbar--active-content"
              spy={true}
              smooth={true}
              href="/ourservices"
              offset={-70}
              duration={500}
              className="navbar--content"
            >
              OUR SERVICES
            </a>
          </li>
          <li>
            <FaShoppingCart color="red" className="navbar--content" />
          </li>
          <li style={{ width: "226px" }}>
            <button className="btn-primary">ORDER NOW</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
