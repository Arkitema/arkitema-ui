import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { InformationInput } from './informationInput'
import { describe, expect, it, vi } from 'vitest'

describe('InformationInput', () => {
  it('successfully renders information input ast textfield', async () => {
    const setValueMock = vi.fn().mockImplementation(()=>{})
    const textField = screen.getByLabelText('text-field') as HTMLInputElement;
    const { getByLabelText } = render(<InformationInput id='1' label='Name' setValue={setValueMock} value='' />)
    //const textField = getByLabelText('Name *') as HTMLInputElement;
    console.log('textfield before: ', textField)
    fireEvent.change(textField, { target: { value: 'John Doe' } });
    console.log('textfield after: ', textField.value)
    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        console.log('textfield after:', textField.value);
  
        expect(setValueMock).toHaveBeenCalledTimes(1);
        expect(setValueMock).toHaveBeenCalledWith('John Doe');
        expect(hasInputValue(textField, "John Doe")).toBe(true)
        //expect(textField.value).toBe('John Doe');
      });
  })
})

type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
  }