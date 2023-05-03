import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import { ArkitemaCard } from "./arkitemaCard";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import getProjectsResponse from "../../__mocks__/getProjects";
import { CardInfo } from "./arkitemaCard";

describe("CarbonCard", () => {
  afterEach(cleanup);
  it("should render carbon card successfully", async () => {
    const projectData = getProjectsResponse;
    const cardInfo: CardInfo = {
      id: projectData.data.projects[0].projectId,
      title: projectData.data.projects[0].name,
      subtitle: projectData.data.projects[0].metaFields.CO2 + "",
      unit: "kgCO2",
      imageUrl: "",
    };

    const { baseElement } = render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Routes>
          <Route
            path="/projects"
            element={<ArkitemaCard cardInfo={cardInfo} key={1} />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(baseElement).toBeDefined();
  });
  it("should render carbon card successfully", async () => {
    const projectData = getProjectsResponse;
    const cardInfo: CardInfo = {
      id: projectData.data.projects[0].projectId,
      title: projectData.data.projects[0].name,
      subtitle: projectData.data.projects[0].metaFields.CO2 + "",
      unit: "kgCO2",
      imageUrl: "",
    };

    const { baseElement } = render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Routes>
          <Route
            path="/projects"
            element={
              <ArkitemaCard
                cardInfo={cardInfo}
                key={1}
                data-testid="carbon-card"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );
    expect(baseElement).toBeDefined();
    expect(baseElement).toBeTruthy();
    expect(await screen.findByTestId("carbon-card")).toBeInTheDocument();
  });
});
