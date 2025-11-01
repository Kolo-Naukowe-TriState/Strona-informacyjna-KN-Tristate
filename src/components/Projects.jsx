import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Program w C dla płytki CoraZ7 w systemie PetaLinux",
      description:
        "Projekt obejmuje stworzenie i uruchomienie prostego programu w języku C na platformie CoraZ7 z wykorzystaniem systemu PetaLinux. Studenci zapoznali się z konfiguracją środowiska wbudowanego, kompilacją jądra i integracją aplikacji użytkownika z systemem Linux działającym na układzie FPGA.",
    },
    {
      title: "Zdalne laboratorium Koła Naukowego",
      description:
        "Celem projektu jest stworzenie infrastruktury umożliwiającej zdalny dostęp do sprzętu FPGA przez przeglądarkę. Użytkownicy mogą wgrywać konfiguracje, testować kod HDL oraz obserwować wyniki w czasie rzeczywistym. Projekt ma ułatwić naukę układów cyfrowych studentom, którzy nie mają fizycznego dostępu do laboratoriów.",
    },
    {
      title: "FPGA Hackathon Kraków",
      description:
        "Członkowie koła przygotowali się i wzięli udział w ogólnopolskim FPGA Hackathonie w Krakowie. W ramach wydarzenia zespół opracował koncepcję innowacyjnego projektu opartego na logice programowalnej, integrując moduły w Verilogu oraz system komunikacji z mikrokontrolerem. Udział w konkursie pozwolił zdobyć praktyczne doświadczenie i nawiązać kontakty z branżą.",
    },
  ];

  return (
    <section id="projekty" className="section projects-section">
      <h2>Nasze projekty</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
