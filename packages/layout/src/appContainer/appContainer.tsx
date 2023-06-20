import { Container, ThemeProvider } from '@mui/material'
import React, { ReactNode } from 'react'
import { ErrorBoundary } from '@arkitema/errorhandling'
import { theme } from '@arkitema/brand'

interface AppContainerProps {
  children: ReactNode
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <React.Suspense fallback={null}>
      <ErrorBoundary >
        <ThemeProvider theme={theme} >
          <Container
            data-testid='app-container'
            maxWidth={false}
            disableGutters={true}
            sx={{
              minHeight: '100vh',
              backgroundColor: theme.palette.background.default,
            }}
          >
            {children}
          </Container>
        </ThemeProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
