import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillBehanceSquare } from 'react-icons/ai';

// change id n shit, make it black mb

function Footer() {
  return (
    <div id="subscribe">
      <h3>Stay in touch </h3>
      <IconContext.Provider value={{ color: "#1b1b1b", size: "2em", className: "global-class-name" }}>
        <div class="footer-social">
          <a href="https://www.behance.net/adamalbsoul/">
            <p><AiFillBehanceSquare /></p>
          </a>

          <a href="https://www.linkedin.com/in/adam-albsoul-a85ba6174/">
            <p><AiFillLinkedin /></p>
          </a>
          <a href="https://github.com/adamalbsoul/">
            <p><AiFillGithub /></p>
          </a>
        </div>
      </IconContext.Provider>
      <div class="footer">
        <Link to="/" smooth={true}>
          <p>Home</p>
        </Link>

        <ScrollLink to="services" smooth={true}>
          <p>Projects</p>
        </ScrollLink>

        <ScrollLink to="features" smooth={true}>
          <p>About</p>
        </ScrollLink>
      </div>
      <p>
        Adam Albsoul, 2021 | Made using React
        <span role="img" aria-label="atom">
          ⚛️
        </span>
      </p>
      <br />
      <ScrollLink to="topofpage" smooth={true} className="to-top-btn">
        <p>Back to top</p>
      </ScrollLink>
    </div>
  );
}

export default Footer;
