import React from "react";
import Projectpage from "./Projectpage";
import {Helmet} from "react-helmet";

import image1 from "../images/drawing1.webp";
import image2 from "../images/drawingwebgl.webp";

function Taplingua() {
  return (
    <>
      <Helmet>
        <title>Drawing Webapp</title>
        <meta charSet="utf-8" name="description" content="A drawing web-app made using C# and Unity" />
      </Helmet>

      <Projectpage
        title="Drawing Webapp"
        tldr="A drawing web-app made using C# and Unity
        "
        hero={image1}
        synopsis="A web-based drawing app featuring changeable brush colour, changeable brush size, saving as a PNG image. The C# code uses the trail renderer to allow drawing lines with the use of either a swipe on touchscreen devices or mouse movements on computers. It uses Unity's WebGL to run as a webapp in the browser.
        "
        image2={image2}
        button1link="https://github.com/adamalbsoul/Drawing-Application-With-Save-Feature"
        button1label="Project"
      />
    </>
  );
}

export default Taplingua;
