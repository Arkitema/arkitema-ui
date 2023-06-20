import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import { ArkitemaCard, CardInfo } from './arkitemaCard'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

const cardInfo: CardInfo = {
  id: 'id',
  title: 'title',
  subtitle: 'subtitle',
  unit: 'kgCO2',
  imageUrl: '',
}

describe('CarbonCard', () => {
  afterEach(cleanup)
  it('should render carbon card successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path='/projects' element={<ArkitemaCard cardInfo={cardInfo} cardKey={1} />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeDefined()
  })
  it('should render carbon card successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route
            path='/projects'
            element={<ArkitemaCard cardInfo={cardInfo} cardKey={1} data-testid='carbon-card' />}
          />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeDefined()
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('carbon-card')).toBeInTheDocument()
  })
})
