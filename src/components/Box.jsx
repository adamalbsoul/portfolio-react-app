import React from "react";
// this is shit, delet this

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        <h1>{props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href={props.link} className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
