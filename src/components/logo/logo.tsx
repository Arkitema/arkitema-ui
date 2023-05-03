import React, { CSSProperties } from "react";
import { CarbonBaseLogo } from "../../assets";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface LogoProps {
  sxImage?: Record<string, unknown>;
  sxText?: Record<string, unknown>;
  link: string;
  title: string;
}
export function Logo(props: LogoProps) {
  const { sxImage, sxText, link, title } = props;
  const height =
    sxImage && sxImage.height ? (sxImage.height as string) : "100px";

  const textSize = Number(parseInt(height, 10)) * 1.275;
  const margin = Number(parseInt(height, 10)) * 0.19;

  return (
    // <Link to={link} aria-label="logo" data-testid="logo">
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img
        alt="carbon-base-logo"
        style={{ marginTop: margin + "px", ...(sxImage as CSSProperties) }}
        src={CarbonBaseLogo}
      />
      <Typography
        variant="h1"
        component="div"
        sx={{
          flexGrow: 1,
          marginLeft: "11.27px",
          font: "Matter",
          fontSize: textSize + "px",
          fontWeight: "medium",
          ...sxText,
        }}
      >
        {title}
      </Typography>
    </div>
    // </Link>
  );
}
