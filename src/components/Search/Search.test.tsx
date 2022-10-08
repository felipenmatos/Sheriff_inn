import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("renders text label in search", () => {
  render(<Search />);
  const text = screen.getByText(/Data de Ida/i);
  expect(text).toBeInTheDocument();
});
