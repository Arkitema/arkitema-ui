import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { DataFetchWrapper } from "./dataFetchWrapper";
import { ApolloError } from "@apollo/client";

describe("DataFetchWrapper", () => {
  it("renders the loading component when loading is true", async () => {
    const { baseElement } = render(
      <DataFetchWrapper loading={true} error={undefined}>
        <div>Child Content</div>
      </DataFetchWrapper>
    );
    expect(baseElement).toBeTruthy();
    expect(await screen.findByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders the error message component when an error is present", async () => {
    const error = new ApolloError({
      errorMessage: "Sorry.. an error occured",
    });
    const { baseElement } = render(
      <DataFetchWrapper loading={false} error={error}>
        <div>Child Content</div>
      </DataFetchWrapper>
    );
    expect(baseElement).toBeTruthy();
    expect(await screen.findByTestId("error-message")).toBeInTheDocument();
  });

  it("renders the error boundary component when there is no error and loading is false", async () => {
    const { baseElement } = render(
      <DataFetchWrapper loading={false} error={undefined}>
        <div data-testid="child">Child Content</div>
      </DataFetchWrapper>
    );
    expect(baseElement).toBeTruthy();
    expect(await screen.findByTestId("child")).toBeInTheDocument();
  });
});
