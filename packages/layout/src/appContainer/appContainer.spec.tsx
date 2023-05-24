import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AppContainer } from './appContainer'
import React from 'react'

describe('appContainer', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <AppContainer>
        <></>
      </AppContainer>,
    )
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('app-container')).toBeInTheDocument()
  })
})
