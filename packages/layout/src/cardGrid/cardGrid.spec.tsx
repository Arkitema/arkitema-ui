import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import { CardGrid } from './cardGrid'
import { MockedProvider } from '@apollo/client/testing'

describe('CardGrid', () => {
  afterEach(cleanup)

  it('should render CardGrid successfully', async () => {
    const { baseElement } = render(
      <CardGrid data-testid='card-grid'>
        <div data-testid='child'></div>
      </CardGrid>,
    )
    const child = await screen.findByTestId('child')
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('card-grid')).toBeInTheDocument()
    expect(await screen.findByTestId('card-grid')).toContainElement(child)
  })
})
