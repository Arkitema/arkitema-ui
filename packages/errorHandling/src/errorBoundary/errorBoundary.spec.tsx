import { render } from '@testing-library/react'
import { ErrorBoundary } from './index'
import '@testing-library/jest-dom'
import React from 'react'

const Child = () => {
  throw new Error()
}

describe('Error Boundary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    )
    expect(baseElement).toBeTruthy()
  })
})
