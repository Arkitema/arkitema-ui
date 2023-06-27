import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, act, renderHook } from '@testing-library/react'
import { InformationInput } from './informationInput'
import { describe, expect, it, vi } from 'vitest'

describe('InformationInput', () => {
  it('successfully renders information input', async () => {
    const setValueMock = vi.fn().mockImplementation(() => {
      console.log('log')
    })
    const { baseElement } = render(<InformationInput id='1' label='Name' setValue={setValueMock} value='' />)
    expect(baseElement).toBeTruthy()
  })
  it('successfully updates information input value', async () => {
    const { result } = renderHook(() => React.useState(''))
    const [value, setValue] = result.current

    const { getByLabelText } = render(<InformationInput id='1' label='Name' setValue={setValue} value={value} />)
    const textField = getByLabelText('Name *') as HTMLInputElement

    await act(async () => {
      fireEvent.change(textField, { target: { value: 'John Doe' } })
      await new Promise((r) => setTimeout(r, 2000))
    })

    expect(result.current[0]).toBe('John Doe')
  })

  it('renders FormControl when options are present', async () => {
    const setValueMock = vi.fn().mockImplementation(() => {
      console.log('')
    })
    const { getByRole } = render(
      <InformationInput
        id='test'
        label='Test'
        setValue={setValueMock}
        value='option1'
        options={['option1', 'option2']}
      />,
    )

    const controlElement = getByRole('button')
    expect(controlElement).toBeInTheDocument()
    await act(async () => {
      fireEvent.mouseDown(controlElement)
      await new Promise((r) => setTimeout(r, 2000))
    })

    const listItem = screen.getByText('option2')
    await act(async () => {
      fireEvent.click(listItem)
      await new Promise((r) => setTimeout(r, 2000))
    })

    expect(setValueMock).toHaveBeenCalledWith('option2')
  })
})
