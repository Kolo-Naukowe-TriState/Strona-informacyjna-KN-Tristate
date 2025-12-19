import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true, // licznik odpali się tylko raz
    threshold: 0.3, // uruchomi się, gdy 30% sekcji widać
  });

  const stats = [
    { value: 3, suffix: "+", label: "Projektów" },
    { value: 15, suffix: "", label: "Lat działalności" },
    { value: 15, suffix: "+", label: "Aktywnych członków" },
  ];

  return (
    <section id="statystyki" className="stats-section" ref={ref}>
      <h2>Nasze Statystyki</h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            {inView ? (
              <CountUp
                start={0}
                end={item.value}
                duration={2}
                suffix={item.suffix}
              />
            ) : (
              0
            )}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
