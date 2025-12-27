import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from "./Hero";

test("Hero wyświetla tytuł", () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Koło Naukowe Układów Cyfrowych/i)
  ).toBeInTheDocument();
});
