import React from "react";
import { render, screen } from "@testing-library/react";
import BodyTop from "./BodyTop";

test("renders text and image in component", () => {
  render(<BodyTop />);
  const text = screen.getByText(/Titulo do texto/i);
  expect(text).toBeInTheDocument();
});
