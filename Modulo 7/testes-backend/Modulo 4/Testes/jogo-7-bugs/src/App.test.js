import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Teste 1", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});

test("Teste 2", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});
