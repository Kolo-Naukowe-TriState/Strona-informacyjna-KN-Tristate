import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
import "./style.css";

function App() {
  const [solved, setSolved] = useState(false);

  return (
    <div>
      {!solved ? (
        <Puzzle onSolved={() => setSolved(true)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Section
            id="o-nas"
            title="O nas"
            content="Jesteśmy grupą studentów zajmujących się układami cyfrowymi, FPGA i systemami embedded..."
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
