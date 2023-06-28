// import React, { ReactNode } from "react";
// import { Grid } from "@mui/material";

// interface CardGridProps {
//   children?: ReactNode;
//   spacing?: number;
//   sx?: any;
// }

// export const CardGrid: React.FC<CardGridProps> = (props) => {
//   const { children, sx, spacing = 3 } = props;

//   return (
//     <Grid
//       data-testid="card-grid"
//       container
//       spacing={spacing}
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         marginLeft: 0,
//         paddingTop: "52px",
//         ...sx,
//       }}
//     >
//       {children}
//     </Grid>
//   );
// };
// import React, { ReactNode } from 'react'
// import { Grid, Box } from '@mui/material'

// interface CardGridProps {
//   children?: ReactNode
//   rowSpacing?: number
//   sx?: any
// }

// export const CardGrid: React.FC<CardGridProps> = (props) => {
//   const { children, rowSpacing = 3, sx } = props

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         ...sx,
//       }}
//     >
//       <Grid
//         data-testid='card-grid'
//         container
//         spacing={rowSpacing}
//         sx={{
//           justifyContent: 'flex-start',
//           maxWidth: 'calc(350px * 4)', // adjust this value according to your card width and the number of cards you want per row
//         }}
//       >
//         {children}
//         <Grid item xs style={{ maxWidth: '300px', visibility: 'hidden' }} /> {/* adjust '300px' according to your card width */}
//       </Grid>
//     </Box>
//   )
// }import React, { ReactNode } from 'react'
import React, { ReactNode } from 'react'
import { Grid } from '@mui/material'

interface CardGridProps {
  children?: ReactNode
  rowSpacing?: number
  sx?: any
}

export const CardGrid: React.FC<CardGridProps> = (props) => {
  const { children, rowSpacing = 3, sx } = props

  return (
    <Grid
      data-testid='card-grid'
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowSpacing={rowSpacing}
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}