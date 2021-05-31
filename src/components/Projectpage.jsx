import React from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll
} from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projectpage(props) {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

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
    <AnimatePresence>
      <div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="project-container"
        id="topofpage"
      >
        <div className="project-body">
          <div id="project-body-text">
            <motion.h1
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
            >
              {props.title}
            </motion.h1>
            <motion.p
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ ease: "easeInOut", delay: 0.5, duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
            >
              {props.tldr}
            </motion.p>
          </div>

          <div id="project-body-img">
            <motion.img
              style={{ scale: scale }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              src={props.hero}
              alt="hero"
              className="project-image-head"
            />
          </div>
        </div>
        <motion.div ref={ref} animate={animation} className="project-desc">
          <h2>Synopsis</h2>
          <p>{props.synopsis}</p>
          <img src={props.image2} alt="second" className="project-image" />
          <p>{props.synopsis2}</p>
          <div className="b-container">
            <a
              href={props.button1link}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              {props.button1label}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
export default Projectpage;
