import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <motion.section
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      id="project"
    >
      <div className="wrapper">
        <div className="projectlayout">
          <img src={props.image} alt={props.alt} />
          <div className="projecttext">
            <h2>{props.title}</h2>
            <p>{props.tldr}</p>
            <Link to={props.path} className="logo">
              <a className="cv-btn">View</a>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Card;
