import { render } from '@testing-library/react'
import { ErrorBoundary } from './index'
import '@testing-library/jest-dom'
import React from 'react'

describe('Error Boundary', () => {
  it('should render an error message when an error occurs', () => {
    // Temporarily mock console.error to silence
    const consoleError = console.error
    console.error = () => {}
    const ErrorChild = () => {
      throw new Error('This is a test error')
    }
    
    const { baseElement } = render(
      <ErrorBoundary>
        <ErrorChild />
      </ErrorBoundary>,
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement.innerHTML).toContain('Try going back or refresh the page')

    // Restore console.error
    console.error = consoleError
  })

  it('should render the child component without error', () => {
    const Child = () => {
      return <h1>No error</h1>
    }
    
    const { baseElement } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    )

    expect(baseElement).toBeTruthy()
    expect(baseElement.innerHTML).toContain('No error')
  })
})
