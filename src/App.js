import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero";
import AttitudeSpeech from "./components/AttitudeSpeech.js";
import SuscribePtim from "./components/SuscribePtim.js";
import RsaMFPAY from "./components/RsaMFPAY.js";
import Footer from "./components/Footer.js";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AttitudeSpeech />
      <SuscribePtim />
      <RsaMFPAY />
      <Footer />
    </>
  );
};

export default App;
