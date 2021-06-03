import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Helmet} from "react-helmet";
import favicon from '../images/favicon.ico';

import Header from "./Header";
import About from "./About";
import Services from "./Services";

function Home() {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
      <Helmet>
        <meta charSet="utf-8" name="description" content="Portfolio for Adam Albsoul" />
        <link id="favicon" rel="icon" href={favicon} type="image/x-icon"/>

        <meta name="robots" content="all" />

        <title>Adam Albsoul's Portfolio</title>
        <meta name="title" content="Adam Albsoul's Portfolio" />
        <meta name="description" content="I create great user experiences from an interdisciplinary creative perspective specialising in Product, Game, Web and UI/UX design" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adamalbsoul.netlify.app/" />
        <meta property="og:title" content="Adam Albsoul's Portfolio" />
        <meta property="og:description" content="I create great user experiences from an interdisciplinary creative perspective specialising in Product, Game, Web and UI/UX design" />
        <meta property="og:image" content="https://raw.githubusercontent.com/adamalbsoul/portfolio-react-app/main/GithubSocial.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://adamalbsoul.netlify.app/" />
        <meta property="twitter:title" content="Adam Albsoul's Portfolio" />
        <meta property="twitter:description" content="I create great user experiences from an interdisciplinary creative perspective specialising in Product, Game, Web and UI/UX design" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/adamalbsoul/portfolio-react-app/main/GithubSocial.png" />
      </Helmet>

        <Header />
        <Services />
        <About />
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
