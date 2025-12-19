import React, { useState } from "react";
import "./Puzzle.css"

const Puzzle = ({ onSolved }) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const checkAnswer = () => {
    if (answer.trim() === "1") {
      onSolved(); 
    } else {
      setError("❌ Zła odpowiedź! Spróbuj ponownie.");
    }
  };

  return (
    <div className="puzzle-container">
      <div className="puzzle-box">
        <h1>Zagadka cyfrowa 🔐</h1>
        <p>
          Jeśli wejście układu <b>XOR</b> ma wartości A=1 i B=0, jaki jest wynik?
        </p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Wpisz odpowiedź..."
        />
        <br />
        <button onClick={checkAnswer}>Sprawdź</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Puzzle;
