import { MockedResponse } from "@apollo/client/testing";
import { GetProjectsDocument } from "../dataAccess"; //Change to construction
import getConstructionResponse from "./getConstructions";

const constructionId = getConstructionResponse.data.projects[0].id;

export const constructionMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectsDocument, //Change to construction
      variables: {},
    },
    result: getConstructionResponse,
  },
];
