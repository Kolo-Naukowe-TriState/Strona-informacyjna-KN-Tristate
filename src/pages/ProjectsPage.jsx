import React from "react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";

import {
  Navbar,
  Section,
  Gallery,
  Projects,
  Footer,
  AnimatedSection,
  ScrollToTopButton,
  ProjectTimeline,
} from "../components";

export default function ProjectsPage() {

  const animatedSections = [
    { id: "timeline", component: <ProjectTimeline /> },
    { id: "projects", component: <Projects /> },
    { id: "gallery", component: <Gallery /> },
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
