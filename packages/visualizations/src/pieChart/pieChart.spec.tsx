import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

xdescribe('PieChart', () => {
  it('renders correctly', () => {
    render(<PieChart {...testProps} />)
    expect(screen.getByRole('svg')).toBeInTheDocument()
  })

  it('displays the correct values', () => {
    render(<PieChart {...testProps} />)
    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('kg CO2-eq /m2/year')).toBeInTheDocument()
  })

  it('selects a data point when clicked', () => {
    render(<PieChart {...testProps} />)
    const dataPoint2 = screen.getByText('Data point 2')
    userEvent.click(dataPoint2)
    expect(dataPoint2).toHaveClass('selected')
  })
})
