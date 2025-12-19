import { motion } from "framer-motion";

import {
  Navbar,
  Section,
  Footer,
  FPGAPuzzle,
  LogicSimulator,
  AnimatedSection,
  ScrollToTopButton,
} from "../components";

import logo from "../images/logo.png";

export default function PuzzlePage() {

  return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navbar logo={logo} />

          <AnimatedSection>
            <LogicSimulator />
          </AnimatedSection>
          
          <FPGAPuzzle />
          <Section
            id="kontakt"
            title="Kontakt"
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          />
          <Footer />
          <ScrollToTopButton />
        </motion.div>
  );
}
