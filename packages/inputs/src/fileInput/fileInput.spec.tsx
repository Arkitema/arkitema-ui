import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { FileInput } from './fileInput'
import { describe, expect, it, vi } from 'vitest'

describe('FileInput', () => {
  it('renders the upload project image text', () => {
    render(
      <FileInput
        text='Upload Project Image'
        imageData=''
        setImageData={() => {
          console.log('')
        }}
      />,
    )
    const textElement = screen.getByText('Upload Project Image')
    expect(textElement).toBeTruthy()
  })
  it('file is uploaded', async () => {
    const setImageDataMock = vi.fn().mockImplementation(() => {
      console.log('')
    })
    const file = new File(['(⌐□_□)'], 'image.jpg', { type: 'image/jpeg' })

    const { getByLabelText } = render(
      <FileInput
        text='Upload Project Image'
        data=''
        setData={setImageDataMock}
        fileType={'image'}
        allowedExtensions={['.jpg', '.jpeg', '.png']}
      />,
    )

    const fileInput = getByLabelText('file-input') as HTMLInputElement
    expect(fileInput.files).toBeUndefined()

    await act(async () => {
      fireEvent.change(fileInput, { target: { files: [file] } })
      await new Promise((r) => setTimeout(r, 2000))
    })
    expect(fileInput?.files[0]).toBeInstanceOf(File)
  })
})
