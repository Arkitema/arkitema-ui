import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./breadcrumb";
import React from "react";

describe("breadcrumb", () => {
  it("should render successfully", async () => {
    const { baseElement } = render(
      <Breadcrumb projectName="My Project" currentPage="settings" />
    );
    expect(baseElement).toBeTruthy();
    expect(await screen.findByTestId("breadcrumb")).toBeInTheDocument();
    expect(await screen.findByText("My Project")).toBeInTheDocument();
    expect(await screen.findByText("Settings")).toBeInTheDocument();
    expect(await screen.findByTestId("breadcrumb-link")).toBeInTheDocument();
    expect(await screen.findByTestId("breadcrumb-link")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
