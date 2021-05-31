import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import featureimage from "../images/timbs.webp";

//replace featureimage and .png, img src, ids

function About() {
  const { ref, inView } = useInView({
    threshold: 0.45
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    if (!inView) {
      animation.start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    console.log("Use effect hook, in View", inView);
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} id="features">
      <div className="features-model">
        <img className="about-image" src={featureimage} alt="about" />
      </div>
      <div className="features-text">
        <h2>About Me</h2>
        <h3></h3>
        <p>
          Hi! I’m Adam, a fresh graduate from Glasgow Caledonian University with
          a BSc degree in Computer Games Design.
          <br />
          <br />
          Previously, I was a design intern at a large tech firm - S&T and a
          smaller start-up - Taplingua where I learned about UI/UX and user
          research strategies, worked at Pole To Win UK on a high profile video
          game, and worked on plenty of projects as a freelancer.
        </p>

        <div className="b-container">
          <a
            href="mailto:albsouladam@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
