import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { PaperPage } from './PaperPage'

describe('PaperPage', () => {
  it('renders children correctly', () => {
    const childText = 'Hello, world!'
    const { getByText } = render(
      <PaperPage>
        <div>{childText}</div>
      </PaperPage>,
    )
    expect(getByText(childText)).toBeInTheDocument()
  })
  it('passes data-testid prop correctly', () => {
    const testId = 'paper-page-test'
    const { getByTestId } = render(
      <PaperPage data-testid={testId}>
        <div>Hello, world!</div>
      </PaperPage>,
    )

    expect(getByTestId(testId)).toBeInTheDocument()
  })
  it('applies custom styles correctly', () => {
    const customStyles = { backgroundColor: 'red' }
    const { container } = render(
      <PaperPage sx={customStyles}>
        <div>Hello, world!</div>
      </PaperPage>,
    )

    expect(container.firstChild).toHaveStyle('background-color: red')
  })

  it('applies maxWidth correctly', () => {
    const { container } = render(
      <PaperPage maxWidth='sm'>
        <div>Hello, world!</div>
      </PaperPage>,
    )

    expect(container.querySelector('.MuiContainer-maxWidthSm')).toBeInTheDocument()
  })
})
