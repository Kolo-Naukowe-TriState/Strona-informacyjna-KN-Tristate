import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
import AnimatedSection from "./components/AnimatedSection";
import "./style.css";

import logo from "./images/logo.png";
import logoCircle from "./images/logo-circle.png";

function App() {
  const [solved, setSolved] = useState(false);

  return (
    <div>
      {!solved ? (
        <Puzzle onSolved={() => setSolved(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar logo={logo} />
          <Hero />
          <AnimatedSection><Section
            id="o-nas"
            title="O nas"
            content={
              <>
                <img
                  src={logoCircle}
                  alt="Logo Koła Naukowego Układów Cyfrowych"
                  className="logo-big"
                />
                <p>
                  Jesteśmy grupą studentów zajmujących się układami cyfrowymi,
                  FPGA i systemami embedded...
                </p>
              </>
            }
          /></AnimatedSection>
          <Projects /> 
          <AnimatedSection>
          <Gallery />
          </AnimatedSection>
          <AnimatedSection><Section
            id="kontakt"
            title="Kontakt"
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          /></AnimatedSection>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
