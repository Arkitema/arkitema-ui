import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ArkitemaButton } from './arkitemaButton'
import React from 'react'

describe('ArkitemaButton', () => {
  const mockProps = {
    text: 'Click me',
    onclick: () => {
      console.log('clicked')
    },
  }

  it('renders button text', () => {
    const { getByText } = render(<ArkitemaButton {...mockProps} />)
    expect(getByText(mockProps.text)).toBeTruthy()
  })
})
