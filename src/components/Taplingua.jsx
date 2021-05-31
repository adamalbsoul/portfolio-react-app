import React from "react";
import Projectpage from "./Projectpage";

import image1 from "../images/TL.webp";
import image2 from "../images/taplinguabuy.webp";

function Taplingua() {
  return (
    <>
      <Projectpage
        title="Taplingua"
        tldr="Improving the user experience of the Taplingua Android and iOS app"
        hero={image1}
        synopsis="As an UI/UX and product designer intern at a language learning,
        gamified application start-up, I've utilised a range of design
        skills. A data driven approach using analytics was employed for user
        research. Interface of the application on Android and iOS was
        redesigned according to Material design guidelines. Work also
        included optimising the user flow for onboarding, engagement,
        gamification, monetisation, and user retention."
        image2={image2}
        //*synopsis2="Tldr of the doc - "
        button1link="https://play.google.com/store/apps/details?id=com.taplingua.languages&hl=hr&gl=US"
        button1label="Play Store"
      />
    </>
  );
}

export default Taplingua;
