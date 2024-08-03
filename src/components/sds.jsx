import React from "react";
import Projectpage from "./Projectpage";
import {Helmet} from "react-helmet";

import image1 from "../images/M.webp";
import image2 from "../images/monumentalui.webp";

function Monumental() {
  return (
    <>
      <Helmet>
        <title>Building and Scaling the Spectrum Design System in Figma</title>
        <meta charSet="utf-8" name="description" content="Building and Scaling the JPMorgan Asset Management Spectrum Design System in Figma" />
      </Helmet>

      <Projectpage
        title="Spectrum Design System"
        tldr="Building and Scaling the JPM AM Spectrum Design System in Figma"
        hero={image1}
        synopsis="JPMorgan Asset Management’s Spectrum* is a powerful, proprietary, data-driven investment platform containing over 120 applications and used by over 4,000 users to manage $2.9 trillion in client assets.

I joined JPMorgan Asset Management in November 2021 as a User Experience designer to build the Spectrum Design System (SDS) Figma Component Library. The Spectrum Design System Figma Component Library was created to unify the design process across JPMorgan Chase Asset Management, addressing the challenges of inconsistency and inefficiency faced by designers. By developing a scalable and flexible system that supports over 100 internal applications globally, the library has enabled a cohesive user experience, streamlined development processes, and significantly improved designer productivity. with a team in an agile approach to deliver the product in time.        
        "
        button1link="https://www.behance.net/gallery/102013193/Monumental-location-based-AR-mobile-game-UI-concepts/"
        button1label="Project"
        button2link="https://docs.google.com/document/u/4/d/1VpPKaeOZHgexdfiO8Rpy5Bm44EuCTqzYbXVDx3TpTHU/edit?usp=sharing"
        button2label="Documentation"
        image2={image2}
        heading2="Problem"
        synopsis2="At the time I joined there was a Spectrum Design System (SDS) codebase but other than an old Sketch file with some icons no component library meaning that instead of having a standardised approach for building designs and a library of reusable elements, designers faced the challenge of recreating commonly used design elements for each new Spectrum app design.

This process was not only time-consuming but also introduced the risk of inconsistency, as the design elements, created independently, led to a fragmented look and feel across Spectrum applications.

When the SDS team set out to create the Spectrum Design System Figma Component Library, the goal was to unify the look and feel across hundreds of internal applications used globally. This initiative aimed to enhance consistency, streamline development processes, and improve the user experience for both designers and users"
        heading3="Stakeholder Buy-In"
        synopsis3="Due to all the issues listed above, the plan was to start from scratch and create a new Component Library in Figma. I wanted it to be a pixel-perfect match to what we have in production (the SDS Codebase). This would require a lot of time and effort which meant that we needed investment from senior management.
        
        My product owner and I created a sample of what a couple of Figma Component Library components could look like to present to a Managing Director, a key figure in Asset Management. The meeting would determine if the Spectrum Design System Figma Asset Library was worth investing in as an initiative from a business perspective.

By demonstrating how the components would work in Figma and how it would free up designers’ time by letting them focus on actual user experience issues instead of spending time tweaking UI elements we successfully persuaded the key Managing Director to invest in the Figma Component Library."
        heading4="Process"
        synopsis4="Since I was relatively new to the company, I wanted to make sure that I get a clear understanding of all the components. I worked closely with engineers to understand all the properties and limitations. The SDS team and I also planned out sessions with multiple other design system teams across JPMorgan Chase to get an understanding of how they approached the design system.

Through research into the needs of our future users—the rest of the Spectrum UX design team—we discovered that a robust library capable of supporting every app was essential. I built the system from the ground up, ensuring that complex components were constructed using simpler components and styles as their foundation.

We also ran competitor analysis with both internal and external design system component libraries to learn what the industry standard is. We found out that a good design system Figma component library follows the Atomic Design methodology and starts with solid foundations:
        Laying the foundations (Atoms)
        I started off with the core of any library:

Typography / Text Tokens - Fonts, font sizes, weights, line heights, and text colors.
Colour Tokens - Defined colors and their variations (primary, secondary, accent, etc.).
Iconography - The icon set used throughout the library.
Spacing Units - Margin and padding values were defined for sizing.

These served as the atoms of the library which were used as the basic building blocks for everything that followed.
        
        Building the components (Molecules)
        Using the foundational elements I started building out the basic components by combining the colour tokens, typography, spacing units and iconography:

Buttons
Inputs
Radio Buttons
Checkboxes

These molecules utilized the foundational atoms to form more complex, reusable UI components that could be easily integrated into larger design structures.

        Tying it all together (Organisms)
        As the molecules were established, I began creating organisms, which are larger, more complex components:

Headers
Navigational elements
Forms
Modals
        "
        heading5="Component Architecture"
        synopsis5="Before making the Figma Component Library, Spectrum designers were already familiar with Figma, but didn’t leverage the advanced design system features that could streamline their workflows.
Through speaking to the design team I found that a lot of times even small features that they had to design in Figma were time consuming. A designer could spend hours or days even on simple UI design or prototype in Figma."

To address this issue, I incorporated the following Figma features into each of the 36 components in the library, enabling the team to build products more efficiently and effectively:

        />
    </>
  );
}

export default sds;
