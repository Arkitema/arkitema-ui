import React, { ReactNode } from "react";
import { Grid } from "@mui/material";

interface CardGridProps {
  children?: ReactNode;
  spacing?: number;
  sx?: any;
}

export const CardGrid: React.FC<CardGridProps> = (props) => {
  const { children, sx, spacing = 3 } = props;

  return (
    <Grid
      data-testid="card-grid"
      container
      spacing={spacing}
      sx={{
        width: "100%",
        display: "flex",
        marginRight: 0,
        marginLeft: 0,
        paddingTop: "52px",
        paddingRight: 0,
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
};
