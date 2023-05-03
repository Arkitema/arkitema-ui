import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export interface BreadcrumbProps {
  projectName: string | undefined;
  currentPage: string | undefined;
}

export const Breadcrumb = ({ projectName, currentPage }: BreadcrumbProps) => {
  const projectPageCap =
    currentPage !== undefined
      ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
      : "Project Page";

  // Checking if we're on the homepage
  const crumbs =
    projectName !== undefined ? (
      <Breadcrumbs aria-label="breadcrumb" data-testid="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          data-testid="breadcrumb-link"
        >
          {projectName}
        </Link>
        <Typography color="text.primary">{projectPageCap}</Typography>
      </Breadcrumbs>
    ) : (
      ""
    );

  return (
    <div role="presentation" onClick={handleClick} style={{ marginLeft: "5%" }}>
      {crumbs}
    </div>
  );
};
