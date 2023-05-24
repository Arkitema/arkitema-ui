import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Loading } from './index'
import React from 'react'

describe('Loading', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Loading />)
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('should return null if not loading ', () => {
    const { container } = render(<Loading loading={false} />)
    expect(container.innerHTML).toHaveLength(0)
  })
})
