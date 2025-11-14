import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";
import FPGAPuzzle from "./components/FPGAPuzzle";
import LogicSimulator from "./components/LogicSimulator";
import AnimatedSection from "./components/AnimatedSection";
import "./style.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import JoinUs from "./components/JoinUs";


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
                  Jesteśmy grupą studentów pasjonujących się układami cyfrowymi, systemami FPGA oraz projektowaniem embedded.
                  Pracujemy z nowoczesnymi narzędziami, takimi jak AMD Vivado, Vitis, PetaLinux, a także rozwijamy projekty oparte o architekturę RISC-V – od prostych peryferiów po kompletne systemy SoC.
                  Regularnie bierzemy udział w wydarzeniach technologicznych, m.in. w FPGA Hackathonie w Krakowie, gdzie zdobywamy doświadczenie w pracy zespołowej, integracji sprzętu z oprogramowaniem i szybkim prototypowaniu.
                  Tworzymy również tutoriale, prezentacje i mini-kursy, aby pomóc nowym członkom łatwo wejść w świat FPGA i logiki cyfrowej. Wszystko to odbywa się w przyjaznej, luźnej atmosferze – poznajesz ludzi o podobnych zainteresowaniach i zawsze możesz liczyć na wsparcie bardziej doświadczonych kolegów.
                </p>
              </>
            }
          /></AnimatedSection>
          <AnimatedSection>
          <Stats />
          </AnimatedSection>
          <Projects /> 
          <AnimatedSection>
          <Gallery />
          </AnimatedSection>
          <AnimatedSection>
          <Team />
          </AnimatedSection>
          <AnimatedSection>
          <JoinUs />
          </AnimatedSection>
          <Section
            id="zagadki"
            title="Zagadki FPGA"
            content={<FPGAPuzzle />}
          />
          <AnimatedSection>
          <LogicSimulator />
          </AnimatedSection>
          <AnimatedSection><Section
            id="kontakt"
            title="Kontakt"
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          /></AnimatedSection>
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      )}
    </div>
  );
}

export default App;
