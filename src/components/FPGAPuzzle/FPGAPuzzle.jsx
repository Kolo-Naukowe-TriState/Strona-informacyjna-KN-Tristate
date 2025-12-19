import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./FPGAPuzzle.css";

const puzzles = [
  {
    question: "Co będzie wynikiem bramki AND dla A=1, B=0?",
    options: ["0", "1", "Zależy od napięcia progowego"],
    correct: 0,
    fact: "Bramka AND daje 1 tylko wtedy, gdy wszystkie wejścia są równe 1."
  },
  {
    question: "Ile stanów może przyjąć 3-bitowy licznik binarny?",
    options: ["6", "7", "8"],
    correct: 2,
    fact: "3 bity to 2³ = 8 stanów, od 000 do 111."
  },
  {
    question: "Jak działa przerzutnik D?",
    options: [
      "Kopiuje stan wejścia przy zboczu zegara",
      "Sumuje sygnały wejściowe",
      "Porównuje sygnał z poprzednim stanem"
    ],
    correct: 0,
    fact: "Przerzutnik D to fundament rejestrów i liczników."
  },
  {
    question: "Jaki kod binarny odpowiada liczbie dziesiętnej 13?",
    options: ["1101", "1011", "1110"],
    correct: 0,
    fact: "13 = 1101 w binarnym."
  },
  {
    question: "Które z poniższych to funkcja OR?",
    options: ["Y = A + B", "Y = A • B", "Y = ¬(A • B)"],
    correct: 0,
    fact: "OR zwraca 1, jeśli dowolne wejście to 1."
  }
];

// progi certyfikatów:
const titles = [
  { points: 5, name: "KNUC Junior" },
  { points: 10, name: "KNUC FPGA Adept" },
  { points: 20, name: "KNUC Logic Master" }
];

export default function FPGAPuzzle() {
  const [current, setCurrent] = useState(
    puzzles[Math.floor(Math.random() * puzzles.length)]
  );
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState(null);

  const handleAnswer = (index) => {
    setSelected(index);
    setAnswered(true);

    if (index === current.correct) {
      const newPoints = points + 1;
      setPoints(newPoints);

      // sprawdzanie osiągniętych rang
      const unlocked = titles.find((t) => t.points === newPoints);
      if (unlocked) {
        setTitle(unlocked.name);
        fireConfetti();
      }
    }
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 180,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleNext = () => {
    setAnswered(false);
    setSelected(null);
    setCurrent(puzzles[Math.floor(Math.random() * puzzles.length)]);
  };

  return (
    <div className="fpga-puzzle">
      <h2>Zagadki FPGA</h2>

      <p className="points">Punkty: <strong>{points}</strong></p>

      {title && (
        <p className="rank">
          🏅 Otrzymałeś tytuł: <strong>{title}</strong>!
        </p>
      )}

      <p className="question">{current.question}</p>

      <div className="options">
        {current.options.map((opt, i) => (
          <button
            key={i}
            className={`option ${
              answered
                ? i === current.correct
                  ? "correct"
                  : i === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => !answered && handleAnswer(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="feedback">
          {selected === current.correct ? (
            <p className="success">
              Dobrze! {current.fact}
            </p>
          ) : (
            <p className="error">
              Niestety nie. Poprawna odpowiedź to:{" "}
              <strong>{current.options[current.correct]}</strong>.
            </p>
          )}

          <button className="next-btn" onClick={handleNext}>
            Następna zagadka →
          </button>
        </div>
      )}
    </div>
  );
}
