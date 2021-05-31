import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <Header />
        <Services />
        <About />
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
