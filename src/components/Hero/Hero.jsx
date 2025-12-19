import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const [gradient, setGradient] = useState({
    x: 50,
    y: 50,
  });

  // Aktualizacja pozycji gradientu przy ruchu myszą
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradient({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      className="hero"
      style={{
        background: `radial-gradient(
          circle at ${gradient.x}% ${gradient.y}%,
          #00bcd4,
          #3f51b5
        )`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Koło Naukowe Układów Cyfrowych
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Łączymy pasję do elektroniki i nowoczesnych technologii.
        </motion.p>
        <motion.a
          href="#projekty"
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Zobacz projekty
        </motion.a>
      </div>
    </motion.section>
  );
}
