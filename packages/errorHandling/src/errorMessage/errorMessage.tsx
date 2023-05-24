import React from 'react'
import { ApolloError } from '@apollo/react-hooks'
import { Alert, AlertTitle, Box } from '@mui/material'

export interface ErrorProps {
  error?: ApolloError
}

export const ErrorMessage: React.FC<ErrorProps> = ({ error = null }) => {
  if (!error) {
    return null
  }

  return (
    <Box sx={{ padding: 3 }} data-testid='error-message'>
      <Alert severity='error' data-testid='alert'>
        <AlertTitle>{error.name}</AlertTitle>
        {error.message}
      </Alert>
    </Box>
  )
}
