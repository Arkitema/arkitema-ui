import '@testing-library/jest-dom'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { InformationInput } from './informationInput'
import { describe, expect, it, vi } from 'vitest'
import { useState } from 'react'

describe('InformationInput', () => {
  it('successfully renders information input', async () => {
    const setValueMock = vi.fn().mockImplementation(() => {
      console.log('log')
    })
    const { baseElement } = render(<InformationInput id='1' label='Name' setValue={setValueMock} value='' />)
    expect(baseElement).toBeTruthy()
  })
  it('successfully updates information input value', async () => {
    const { result } = renderHook(() => useState(''))
    const [value, setValue] = result.current

    const { getByLabelText } = render(<InformationInput id='1' label='Name' setValue={setValue} value={value} />)
    const textField = getByLabelText('Name') as HTMLInputElement

    await act(async () => {
      fireEvent.change(textField, { target: { value: 'John Doe' } })
      await new Promise((r) => setTimeout(r, 2000))
    })

    expect(result.current[0]).toBe('John Doe')
  })
})
