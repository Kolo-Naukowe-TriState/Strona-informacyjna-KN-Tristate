import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
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
        <>
          <Navbar logo={logo} />
          <Hero />
          <Section
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
          />
          <Projects />
          <Section
            id="kontakt"
            title="Kontakt"
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
