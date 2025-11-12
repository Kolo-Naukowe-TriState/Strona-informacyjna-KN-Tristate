import React, { useState } from "react";
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
      "Kopiuje stan wejścia D na wyjście przy zboczu zegara",
      "Sumuje sygnały wejściowe",
      "Porównuje sygnał z poprzednim stanem"
    ],
    correct: 0,
    fact: "Przerzutnik D jest podstawą rejestrów i pamięci w układach cyfrowych."
  },
  {
    question: "Jaki kod binarny odpowiada liczbie dziesiętnej 13?",
    options: ["1101", "1011", "1110"],
    correct: 0,
    fact: "13 w systemie binarnym to 8 + 4 + 1 = 1101."
  },
  {
    question: "Które z poniższych to funkcja OR?",
    options: ["Y = A + B", "Y = A • B", "Y = ¬(A • B)"],
    correct: 0,
    fact: "OR (suma logiczna) zwraca 1, jeśli dowolne wejście to 1."
  }
];

export default function FPGAPuzzle() {
  const [current, setCurrent] = useState(
    puzzles[Math.floor(Math.random() * puzzles.length)]
  );
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index) => {
    setSelected(index);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setSelected(null);
    setCurrent(puzzles[Math.floor(Math.random() * puzzles.length)]);
  };

  return (
    <div className="fpga-puzzle">
      <h2>Zagadki FPGA</h2>
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
              <br />
              🏅 Gratulacje — zdobywasz tytuł “Członek KNUC”!
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
