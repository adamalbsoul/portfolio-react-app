import React from "react";
import Projectpage from "./Projectpage";
import {Helmet} from "react-helmet";

import image1 from "../images/TL.webp";
import image2 from "../images/taplinguabuy.webp";

function Taplingua() {
  return (
    <>
      <Helmet>
        <title>Taplingua</title>
        <meta charSet="utf-8" name="description" content="Improving the user experience of the Taplingua Android and iOS app" />
      </Helmet>

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
        gamification, monetisation, and user retention. The first step was to identify pain points and areas that need improvement through a user-walkthrough. "
        image2={image2}
        //*synopsis2="Tldr of the doc - "
        button1link="https://play.google.com/store/apps/details?id=com.taplingua.languages&hl=hr&gl=US"
        button1label="Play Store"
        button2link="https://drive.google.com/file/d/1h7mlvBO3krKetggu9gUg9h4r3oJ-qWz4/view?usp=sharing"
        button2label="Document"
        heading2="Identified pain points"
        synopsis2="At first the discovery phase was marked by creating a document outlining the areas that need UX/UI improvement. These were analysed and solutions were proposed which were then worked on in Adobe XD for the remainder of the internship period."
      />
    </>
  );
}

export default Taplingua;
