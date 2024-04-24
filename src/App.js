import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero";
import AttitudeSpeech from "./components/AttitudeSpeech.js";
import SuscribePtim from "./components/SuscribePtim.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AttitudeSpeech />
      <SuscribePtim />
    </>
  );
};

export default App;
