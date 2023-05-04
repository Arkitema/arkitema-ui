import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./index";

describe("404Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
