import { MockedResponse } from "@apollo/client/testing";
import { GetProjectsDocument } from "../dataAccess";
import getProjectsResponse from "./getProjects";

const projectId = getProjectsResponse.data.projects[0].id;

export const projectMock: MockedResponse[] = [
  {
    request: {
      query: GetProjectsDocument,
      variables: {},
    },
    result: getProjectsResponse,
  },
];
