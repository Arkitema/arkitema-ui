import { ApolloError } from '@apollo/client'
import React, { ReactNode } from 'react'
import { Loading } from '../loading'
import { ErrorMessage, ErrorBoundary } from '@arkitema/errorhandling'

interface DataFetchWrapperProps {
  loading?: boolean
  error: ApolloError | undefined
  children: ReactNode
}

export const DataFetchWrapper = <P extends DataFetchWrapperProps>(props: P & DataFetchWrapperProps) => {
  const { loading, error, children } = props

  if (loading) {
    return <Loading data-testid='loading' />
  }

  if (error) {
    return <ErrorMessage error={error} data-testid='error-message' />
  }

  return (
    <ErrorBoundary data-testid='error-boundary' {...(props as P)}>
      {children}
    </ErrorBoundary>
  )
}
