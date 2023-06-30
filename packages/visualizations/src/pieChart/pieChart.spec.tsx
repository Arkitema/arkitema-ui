import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PieChart, { PieProps } from './pieChart'
import React from 'react'

const testProps: PieProps = {
  width: 400,
  height: 400,
  colors: ['#000', '#111', '#222'],
  data: [
    { label: 'Data point 1', value: 10 },
    { label: 'Data point 2', value: 20 },
    { label: 'Data point 3', value: 30 },
  ],
}

describe('PieChart', () => {
  it('renders correctly', () => {
    const { container } = render(<PieChart {...testProps} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
  it('displays the correct values', () => {
    render(<PieChart {...testProps} />)
    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('kg CO₂/m²/y')).toBeInTheDocument()
  })
})
