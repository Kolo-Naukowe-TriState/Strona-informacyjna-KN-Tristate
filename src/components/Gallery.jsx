import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

export default function Gallery() {
  return (
    <section id="galeria" className="gallery-section">
      <h2>Galeria</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={src} alt={`Galeria ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
