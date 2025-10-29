import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Pierwszy projekt", desc: "Projekt ..." },
  { title: "Drugi projekt", desc: "Projekt ..." },
  { title: "Trzeci projekt", desc: "Projekt ..." },
];

const Projects = () => {
  return (
    <section id="projekty" className="section">
      <h2>Nasze projekty</h2>
      <div className="grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
