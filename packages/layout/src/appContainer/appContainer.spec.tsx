import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppContainer } from './appContainer'

describe('AppContainer', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <AppContainer>
        <div data-testid='child-component'>Content</div>
      </AppContainer>,
    )
    expect(getByTestId('child-component')).toBeInTheDocument()
  })
})
