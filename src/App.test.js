import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to My React App!/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders logo image", () => {
  render(<App />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveClass("App-logo");
});

test("renders header with correct class", () => {
  render(<App />);
  const header = screen.getByRole("banner");
  expect(header).toHaveClass("App-header");
});
