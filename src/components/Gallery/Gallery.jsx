import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import galleryImages from "../../images/gallery";

export default function Gallery() {
  return (
    <section id="galeria" className="gallery-section">
      <h2>Galeria</h2>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
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
