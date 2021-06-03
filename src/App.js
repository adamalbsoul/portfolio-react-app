import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Taplingua from "./components/Taplingua";
import DrawingWebapp from "./components/DrawingWebapp";
import Latinify from "./components/Latinify";
import Polarmigration from "./components/Polarmigration";
import Monumental from "./components/Monumental";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <div className="App">
          <Navbar />

          <Route path="/" exact component={Home} />
          <Route path="/taplingua" component={Taplingua} />
          <Route path="/drawingwebapp" component={DrawingWebapp} />
          <Route path="/latinify" component={Latinify} />
          <Route path="/Polarmigration" component={Polarmigration} />
          <Route path="/Monumental" component={Monumental} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
