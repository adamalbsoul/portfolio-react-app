import React from "react";
import Projectpage from "./Projectpage";
import {Helmet} from "react-helmet";

import image1 from "../images/PM.webp";
import image2 from "../images/polarmenu.webp";

function Polarmigration() {
  return (
    <>
      <Helmet>
        <title>Polar Migration</title>
        <meta charSet="utf-8" name="description" content="Campaign website made using React, Three-Fiber, Drei for Polar Migration, a game concept that bridges fun and online activism which was made using Unity+C#, Adobe Mixamo, Adobe Photoshop, Adobe XD, and Adobe Premiere Pro" />
      </Helmet>

      <Projectpage
        title="Polar Migration"
        tldr="Campaign website made using React and Three-Fiber for my Polar Migration game concept"
        hero={image1}
        synopsis="Made for a design brief set by Rare & Xbox Game Studios - 'Create a game that is a force for good'. The website showcases polar 3D models using Three Fiber and Drei for React. The game was made using Unity+C#, Adobe Mixamo, Adobe Photoshop, Adobe XD, and Adobe Premiere Pro. The player controls Polly the polar bear to move north to reach safe habitats. After a run the player will participate in online activism for the hashtag #polarmigration to reach virality for it and its goals to be noticed.  
        "
        button1link="https://polarmigration.netlify.app/"
        button1label="Website"
        button2link="https://www.youtube.com/watch?v=d1-qaaGA0a4"
        button2label="Trailer"
        image2={image2}
        style={{display: "none"}}
      />
    </>
  );
}

export default Polarmigration;
