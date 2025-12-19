import React, { useState} from "react";
import { motion } from "framer-motion";

import {
  Navbar,
  Hero,
  Section,
  About,
  Stats,
  Gallery,
  Team,
  Projects,
  Footer,
  Puzzle,
  FPGAPuzzle,
  LogicSimulator,
  AnimatedSection,
  ScrollToTopButton,
  JoinUs,
  ProjectTimeline,
} from "./components";


import logo from "./images/logo.png";
import logoCircle from "./images/logo-circle.png";

function App() {
  const [solved, setSolved] = useState(false);
  
    const animatedComponents = [
      <About logoCircle={logoCircle} />,
      <ProjectTimeline />,
      <Stats />,
      <Projects />,
      <Gallery />,
      <Team />,
      <JoinUs />,
      <LogicSimulator />,
      <FPGAPuzzle />,
    ];

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

          {animatedComponents.map((component) => (
            <AnimatedSection>
              {component}
            </AnimatedSection>
          ))}
          
          <Section id="kontakt" title="Kontakt" content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn" />
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      )}
    </div>
  );
}

export default App;
