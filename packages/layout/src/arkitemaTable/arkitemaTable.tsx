import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Box } from '@mui/material'
import { theme } from '@arkitema/brand'

export interface ArkitemaTableProps {
  data: Record<string, unknown>
}

export const ArkitemaTable: React.FC<ArkitemaTableProps> = (props) => {
  const { data } = props
  return (
    <TableContainer
      component={Box}
      sx={{
        marginRight: 10,
      }}
    >
      <Table
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: 'none',
        }}
        size='small'
        aria-label='a dense table'
      >
        <TableBody>
          {Object.keys(data).map((key) => {
            const value = (data as any)[key]
            return (
              <TableRow
                key={key}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component='th' scope='row'>
                  <Typography sx={{ opacity: 1, fontWeight: 500 }}>{key}</Typography>
                </TableCell>
                <TableCell align='right'>{value}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
