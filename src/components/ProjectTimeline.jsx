import React from "react";
import { motion } from "framer-motion";
import "./ProjectTimeline.css";

import hackathonImg from "../images/project3.png";
import petalinuxImg from "../images/project1.png";
import remoteLabImg from "../images/project2.png";

function ProjectTimeline() {
  const items = [
    {
      date: "2025 maj",
      title: "FPGA Hackathon (Kraków)",
      description:
        "Udział w hackathonie FPGA, tworzenie kompletnego projektu w 24 godziny.",
      img: hackathonImg,
      link: "https://fpga-hackathon.pl",
    },
    {
      date: "2024 styczeń",
      title: "C na Cora Z7 + PetaLinux",
      description:
        "Stworzenie programu w języku C i uruchomienie go na PetaLinux w platformie Cora Z7.",
      img: petalinuxImg,
      link: "#",
    },
    {
      date: "2025 październik",
      title: "Zdalne Laboratorium FPGA",
      description:
        "System umożliwiający programowanie FPGA przez Internet — aktualnie w budowie.",
      img: remoteLabImg,
      link: "#",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="section-title">Oś czasu projektów</h2>

      <div className="timeline">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="timeline-link"
              >
                Link do projektu
              </a>

              <img src={item.img} alt={item.title} className="timeline-img" />
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTimeline;