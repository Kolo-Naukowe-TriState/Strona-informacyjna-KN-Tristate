import React, { useState } from "react";
import Modal from "react-modal";
import "./Projects.css";

import projectsData from "../../data/projects.json";
import projectImages from "../../images/projects";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}

export default function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projekty" className="projects-section">
      <h2>Nasze projekty</h2>

      <div className="projects-grid">
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => openModal(p)}
          >
            <img
              src={projectImages[p.imageKey]}
              alt={p.title}
            />
            <h3>{p.title}</h3>
            <p>{p.short}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>✕</button>

            <h2>{selectedProject.title}</h2>
            <img
              src={projectImages[selectedProject.imageKey]}
              alt={selectedProject.title}
            />
            <p>{selectedProject.long}</p>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              🔗 Zobacz na GitHubie
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
}
