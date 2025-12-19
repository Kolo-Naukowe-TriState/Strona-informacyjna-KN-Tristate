import React from "react";
import { motion } from "framer-motion";
import "./ProjectTimeline.css";

import timelineData from "../../data/projectTimeline.json";
import projectImages from "../../images/projects";

function ProjectTimeline() {
  return (
    <div className="timeline-container">
      <h2 className="section-title">Oś czasu projektów</h2>

      <div className="timeline">
        {timelineData.map((item, i) => (
          <motion.div
            key={item.id}
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

              <img
                src={projectImages[item.imageKey]}
                alt={item.title}
                className="timeline-img"
              />

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTimeline;
