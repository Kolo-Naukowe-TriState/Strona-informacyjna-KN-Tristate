import { motion } from "framer-motion";

import {
  Navbar,
  Section,
  About,
  Stats,
  Team,
  Footer,
  AnimatedSection,
  ScrollToTopButton,
  JoinUs,
} from "../components";

import logo from "../images/logo.png";
import logoCircle from "../images/logo-circle.png";

export default function TeamPage() {

  const animatedSections = [
    { id: "about", component: <About logoCircle={logoCircle} /> },
    { id: "stats", component: <Stats /> },
    { id: "team", component: <Team /> },
    { id: "join", component: <JoinUs /> },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Navbar logo={logo} />

        {animatedSections.map(({ id, component }) => (
        <AnimatedSection key={id}>
            {component}
        </AnimatedSection>
        ))}

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
