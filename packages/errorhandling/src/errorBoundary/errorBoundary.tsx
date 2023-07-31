import { ApolloError } from '@apollo/client'
import * as React from 'react'
import { ErrorMessage } from '../errorMessage'
import { Box } from '@mui/material'

interface Props {
  children?: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | undefined
}

export class ErrorBoundary extends React.Component<Props, State> {
  override state: State = {
    hasError: false,
    error: undefined,
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log('error: ', error)
    return { hasError: true, error: error }
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div data-testid='error-boundary-description' style={{ margin: '1em' }}>
          <ErrorMessage
            error={
              new ApolloError({
                errorMessage: 'Sorry.. an error occurred',
              })
            }
          />
          <Box sx={{ padding: 3 }}>
            <h3>Try going back or refresh the page</h3>
            <h3>If the error persist, contact IT Support</h3>
          </Box>
        </div>
      )
    }

    return this.props.children
  }
}
