import React from "react";
import { Box, CircularProgress, IconProps } from "@mui/material";

export interface LoadingProps extends IconProps {
  loading?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ loading = true }) => {
  if (!loading) {
    return null;
  }

  return (
    <Box sx={{ display: "flex" }} data-testid="loading-spinner">
      <CircularProgress />
    </Box>
  );
};
