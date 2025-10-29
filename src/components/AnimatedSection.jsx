import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.8 }}
      className="section"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
