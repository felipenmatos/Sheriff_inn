import React from "react";
import { render, screen } from "@testing-library/react";
import SlideText from "./SlideText";

test("renders learn react link", () => {
  render(<SlideText />);
  const text = screen.getByText(/Venha conhecer Morro de São Paulo/i);
  expect(text).toBeInTheDocument();
});
