import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import logo from "../images/logosvg.svg";

// add mobile hamborger menu with useState or sum

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-btn" for="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/" className="logo">
                Home
              </Link>
            </li>
            <li>
              <ScrollLink to="services" smooth={true}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="features" smooth={true}>
                About
              </ScrollLink>
            </li>
          </ul>
          <ScrollLink to="#" className="burger">
            🍔
          </ScrollLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
