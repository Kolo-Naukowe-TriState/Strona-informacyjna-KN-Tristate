import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Navbar,
  Hero,
  Section,
  About,
  Stats,
  Projects,
  Footer,
  Puzzle,
  FPGAPuzzle,
  AnimatedSection,
  ScrollToTopButton,
} from "../components";

import logo from "../images/logo.png";
import logoCircle from "../images/logo-circle.png";

export default function Home() {
  const [solved, setSolved] = useState(() => {
  return localStorage.getItem("puzzleSolved") === "true";
  });

  const animatedSections = [
    { id: "about", component: <About logoCircle={logoCircle} /> },
    { id: "stats", component: <Stats /> },
    { id: "projects", component: <Projects /> },
  ];

  return (
    <>
      {!solved ? (
        <Puzzle onSolved={() => { localStorage.setItem("puzzleSolved", "true"); setSolved(true); }} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navbar logo={logo} />
          <Hero />

          {animatedSections.map(({ id, component }) => (
            <AnimatedSection key={id}>
              {component}
            </AnimatedSection>
          ))}

          <FPGAPuzzle />
          <Section
            id="kontakt"
            title="Kontakt"
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          />
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      )}
    </>
  );
}
