import React from "react";
import { motion } from "framer-motion";

import WaveLine from "./WaveLine";
import me from "../images/me.webp";

function Header() {
  return (
    <motion.div
      animate={{
        opacity: 1
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      id="topofpage"
      className="main"
    >
      <WaveLine />

      <div className="name">
        <motion.h1
          id="hello"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          Hello! <span>I'm Adam</span>
          <span id="wave-emoji" role="img" aria-label="wave">
            👋
          </span>
          Nice to meet you!
        </motion.h1>

        <motion.p
          className="details"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          Fresh graduate from Glasgow Caledonian University with a BSc (Hons)
          degree in Computer Games Design who creates great user experiences
          from an interdisciplinary creative perspective.
        </motion.p>
        <motion.div
          className="header-btns"
          animate={{
            opacity: 1
          }}
          transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <a
            href="https://drive.google.com/file/d/1y36N0bhxYZi4PviF8IaO1ATcvIcGBPBI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            View CV
          </a>
          <a
            href="mailto:albsouladam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn1"
          >
            Contact
          </a>
        </motion.div>
        <motion.img
          src={me}
          animate={{
            opacity: 1,
            y: -280,
            x: 650
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: -200, x: 650 }}
          className="video"
          loop
        />
      </div>
    </motion.div>
  );
}

export default Header;
