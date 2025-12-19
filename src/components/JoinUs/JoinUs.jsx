import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./JoinUs.css";

Modal.setAppElement("#root"); // wymagane przez react-modal dla dostępności

export default function JoinUs() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(`Dziękujemy ${data.name}! Skontaktujemy się z Tobą na ${data.email}.`);
    reset();
    setIsOpen(false);
  };

  return (
    <section id="dolacz" className="join-section">
      <h2>Dołącz do nas!</h2>
      <p>
        Interesują Cię układy FPGA, elektronika lub systemy embedded?  
        Dołącz do naszego koła naukowego i rozwijaj swoje pasje!
      </p>

      <button className="join-btn" onClick={() => setIsOpen(true)}>
        Wypełnij formularz
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="join-modal"
        overlayClassName="join-overlay"
      >
        <h3>Formularz zgłoszeniowy</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="join-form">
          <label>Imię i nazwisko</label>
          <input {...register("name", { required: true })} placeholder="Jan Kowalski" />

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="jan.kowalski@email.com"
          />

          <label>Dlaczego chcesz do nas dołączyć?</label>
          <textarea {...register("reason")} placeholder="Bo lubię FPGA" />

          <button type="submit" className="send-btn">
            Wyślij
          </button>
        </form>
      </Modal>

      <div className="kahoot-container">
        <h3>Mini-quiz: Sprawdź się!</h3>
        <p>
            Otwórz nasz quiz w nowej karcie:
        </p>
        <a
            href="https://create.kahoot.it/share/quiz-koa-naukowego-ukadow-cyfrowych/d175d6f3-4e7c-4774-aa0e-8c904c4b6f4c"
            target="_blank"
            rel="noopener noreferrer"
            className="kahoot-btn"
        >
            🔗 Uruchom quiz Kahoot
        </a>
      </div>
    </section>
  );
}
