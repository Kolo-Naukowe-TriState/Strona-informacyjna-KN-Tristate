import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import "./Team.css";
import teamData from "../data/team.json";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Wczytanie danych z JSON (można też fetchować z API)
    setTeam(teamData);
  }, []);

  return (
    <section id="zespol" className="team-section">
      <h2>Nasz Zespół</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <Linkedin size={22} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
