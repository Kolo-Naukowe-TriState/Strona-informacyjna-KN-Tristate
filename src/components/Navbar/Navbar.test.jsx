import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("Navbar zawiera link do projektów", () => {
  render(
    <MemoryRouter>
      <Navbar logo="test-logo.png" />
    </MemoryRouter>
  );

  expect(screen.getByText(/projekty/i)).toBeInTheDocument();
});
