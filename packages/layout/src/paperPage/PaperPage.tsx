import React, { ReactNode } from 'react'
import { Container, Paper, SxProps } from '@mui/material'

interface PaperPageProps {
  children: ReactNode
  'data-testid'?: string
  sx?: SxProps
  innerContainerSx?: SxProps
  topPadding?: number
  maxWidth?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

export const PaperPage: React.FC<PaperPageProps> = (props) => {
  const { topPadding = 5, sx, innerContainerSx, children, maxWidth = 'xxl' } = props
  return (
    <Container maxWidth={false} sx={{ alignItems: 'center', ...sx }}>
      <Container maxWidth={maxWidth} data-testid={props['data-testid'] || ''} sx={{ ...innerContainerSx }}>
        <Paper
          elevation={5}
          sx={{
            borderRadius: '25px',
            paddingX: 5,
            paddingY: topPadding,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Container>
  )
}
