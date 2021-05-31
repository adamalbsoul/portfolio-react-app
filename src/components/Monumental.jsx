import React from "react";
import Projectpage from "./Projectpage";

import image1 from "../images/M.webp";
import image2 from "../images/monumentalui.webp";

function Monumental() {
  return (
    <>
      <Projectpage
        title="Monumental"
        tldr="A casual location-based Augmented Reality (AR) mobile game about exploring monuments made in Unity and designed in Adobe XD"
        hero={image1}
        synopsis="UI concepts for ‘Monumental’, a casual location-based Augmented Reality (AR) mobile game about exploring statues and other such cultural monuments of Glasgow. Various styles, typefaces and colour schemes were used.

        The project was a mobile app that incentivises users to explore cultural heritage of Glasgow by walking which I worked on with a team in an agile approach to deliver the product in time.        
        "
        button1link="https://www.behance.net/gallery/102013193/Monumental-location-based-AR-mobile-game-UI-concepts/"
        button1label="Project"
        image2={image2}
        synopsis2="The start of the project was a pre-production phase in which the entire team voiced what would be the best solution and what would be achievable in the given time frame. The brief that was given was vague, but the team was talented and had many ideas to share with the client. The brainstorming resulted in a variety of concepts shown to the client and the most liked one was an Augmented Reality location-based application in which the user walks around the city and with the use of the mobile phone’s camera at certain important historical monuments plays a mini-game with a 3d model of the monument being showcased which then after grabbing the user’s attention tells the user why the monument is important and information about it.
        
        This, of course, would take a long time to develop and design from scratch but the team pulled their weight and we managed to deliver the product in time with most of the features, even the ambitious ones such as having a specific mini-game for each monument, making it into the app. Because of the nature of building the app, the MoSCoW method was used as a prioritization technique to place importance on the delivery of each requirement."
      />
    </>
  );
}

export default Monumental;
