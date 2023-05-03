import { MockedResponse } from "@apollo/client/testing";
import { GetProjectsDocument } from "../dataAccess";
import getMaterialsResponse from "./getMaterials";

const materialId = getMaterialsResponse.data.projects[0].id;

export const MaterialMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectsDocument, //Change to materials
      variables: {},
    },
    result: getMaterialsResponse,
  },
];
