// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Koło Naukowe Układów Cyfrowych
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Łączymy pasję do elektroniki i nowoczesnych technologii.
      </motion.p>

      <motion.a
        href="#projekty"
        className="btn"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        Zobacz projekty
      </motion.a>
    </section>
  );
};

export default Hero;

