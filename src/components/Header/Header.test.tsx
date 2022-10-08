import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders text in component", () => {
  render(<Header />);
  const text = screen.getByText(/Início/i);
  expect(text).toBeInTheDocument();
});
