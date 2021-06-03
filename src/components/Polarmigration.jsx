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
        <meta charSet="utf-8" name="description" content="Unity game concept using C#, Adobe Mixamo, Adobe Photoshop, Adobe XD, and Adobe Premiere Pro for a trailer made as a part of a campaign for global warming" />
      </Helmet>

      <Projectpage
        title="Polar Migration"
        tldr="Unity game concept using C#, Adobe Mixamo, Adobe Photoshop, Adobe XD, and Adobe Premiere Pro for a trailer made as a part of a campaign for global warming"
        hero={image1}
        synopsis="Made for a design brief set by Rare & Xbox Game Studios - 'Create a game that is a force for good'. Meet Polly the polar bear, the main character of Polar Migration. The player controls Polly to move north to reach safe habitats. Polly is on a race against time as the ice cap platforms will be sinking upon landing and moving while the player traverses to the endpoint. There are also obstacles such as human-made litter that slow Polly down. Polar bear food like seals gives Polly a temporary movement boost. After a run the player will participate in online activism for the hashtag #polarmigration to reach virality for it and its goals to be noticed.
        "
        button1link="https://www.youtube.com/watch?v=d1-qaaGA0a4"
        button1label="Trailer"
        button2link="https://drive.google.com/file/d/1OkWTnkuRKbeyznfGbV8UoYS4fD75zso6/view"
        button2label="Infographic"
        image2={image2}
      />
    </>
  );
}

export default Polarmigration;
