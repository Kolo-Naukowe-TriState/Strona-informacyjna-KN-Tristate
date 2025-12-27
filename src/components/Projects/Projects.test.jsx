import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("Projects renderuje nagłówek", () => {
  render(<Projects />);
  expect(screen.getByText(/projekty/i)).toBeInTheDocument();
});
