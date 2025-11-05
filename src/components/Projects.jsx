import React, { useState } from "react";
import Modal from "react-modal";
import "./Projects.css";

import project1img from "../images/project1.png";
import project2img from "../images/project2.png";
import project3img from "../images/project3.png";

Modal.setAppElement("#root");

const projects = [
  {
    title: "Uruchomienie programu w PetaLinux na Cora Z7",
    short:
      "Stworzenie prostego programu w C na płytkę Cora Z7 i jego uruchomienie w środowisku PetaLinux.",
    long:
      "Projekt polegał na przygotowaniu środowiska PetaLinux dla płytki Cora Z7 z układem Zynq-7000. Zespół stworzył aplikację w języku C, skompilował ją w systemie wbudowanym oraz uruchomił na rzeczywistym sprzęcie. W projekcie wykorzystano narzędzia Vivado, Vitis oraz PetaLinux SDK.",
    image: project1img,
    github: "https://github.com/example/cora-z7-petalinux"
  },
  {
    title: "Zdalne Laboratorium Koła",
    short:
      "Projekt platformy umożliwiającej zdalny dostęp do układów FPGA poprzez przeglądarkę.",
    long:
      "Celem projektu jest stworzenie środowiska online do uruchamiania projektów FPGA zdalnie. Dzięki temu członkowie koła mogą testować swoje projekty bez fizycznego dostępu do płytki. Projekt obejmuje integrację mikrokontrolera, serwera backendowego i prostego interfejsu webowego.",
    image: project2img,
    github: "https://github.com/example/remote-lab"
  },
  {
    title: "FPGA Hackathon Kraków 2025",
    short:
      "Udział w hackathonie FPGA w Krakowie - projekt w zespole, zespoły Demain i What's Device Tree.",
    long:
      "Członkowie koła przygotowali się i wzięli udział w ogólnopolskim FPGA Hackathonie w Krakowie. W ramach wydarzenia zespół opracował koncepcję innowacyjnego projektu opartego na logice programowalnej, integrując moduły w Verilogu oraz system komunikacji z mikrokontrolerem. Udział w konkursie pozwolił zdobyć praktyczne doświadczenie i nawiązać kontakty z branżą.",
    image: project3img,
    github: "https://github.com/example/fpga-hackathon"
  }
];

export default function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  return (
    <section id="projekty" className="projects-section">
      <h2>Nasze projekty</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card" onClick={() => openModal(p)}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.short}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Szczegóły projektu"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedProject && (
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              ✕
            </button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
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
