import React from "react";
import Projectpage from "./Projectpage";

import image1 from "../images/latin1.webp";
import image2 from "../images/latin2.webp";

function Taplingua() {
  return (
    <>
      <Projectpage
        title="Latinify"
        tldr="Javascript Chrome extension that converts Cyrillic to Latin script"
        hero={image1}
        synopsis="Chrome Extension made with JavaScript that converts Cyrillic to Latin script on any website. It supports every Cyrillic alphabet.

        Works when any page that contains Cyrillic alphabet is loaded and automiatically converts the letters to Latin."
        button1link="https://chrome.google.com/webstore/detail/latinify/clhcmoeloccdehioknhbbdokpkceaoha/overview/"
        button1label="Web Store"
        image2={image2}
      />
    </>
  );
}

export default Taplingua;
