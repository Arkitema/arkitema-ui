import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./errorMessage";
import React from "react";
import { ApolloError } from "@apollo/client";

describe("Error", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ErrorMessage />);
    expect(baseElement).toBeTruthy();
  });
  it("should return null if no error ", () => {
    const { container } = render(<ErrorMessage />);
    expect(container.innerHTML).toHaveLength(0);
  });

  it("should render error message", async () => {
    const error = new ApolloError({
      errorMessage: "Sorry.. an error occured",
    });
    const { baseElement } = render(<ErrorMessage error={error} />);
    expect(baseElement).toBeTruthy();
    expect(await screen.findByText(error.name)).toBeTruthy();
    expect(await screen.findByText(error.message)).toBeInTheDocument();
  });
});
