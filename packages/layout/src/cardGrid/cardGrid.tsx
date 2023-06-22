import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface CardGridProps {
  children?: ReactNode;
  rowSpacing?: number;
  sx?: any;
}

export const CardGrid: React.FC<CardGridProps> = (props) => {
  const { children, rowSpacing = 3, sx } = props;

  return (
    <Grid
      data-testid="card-grid"
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowSpacing={rowSpacing}
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
};
