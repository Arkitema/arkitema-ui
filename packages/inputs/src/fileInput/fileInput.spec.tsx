import { act, fireEvent, render, screen } from '@testing-library/react'
import { FileInput } from './fileInput'
import { describe, expect, it, vi } from 'vitest'

describe('FileInput', () => {
  it('renders the upload project image text', () => {
    render(
      <FileInput
        text='Upload Project Image'
        data=''
        allowedExtensions={['.jpg', '.jpeg', '.png']}
        fileType={'image'}
        setData={() => {
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

    const { getByTestId } = render(
      <FileInput
        text='Upload Project Image'
        data='(⌐□_□)'
        setData={setImageDataMock}
        fileType={'image'}
        allowedExtensions={['.jpg', '.jpeg', '.png']}
        setLoading={() => ({})}
        fileName={'image.jpg'}
      />,
    )

    const fileInput = getByTestId('file-upload-input') as HTMLInputElement
    expect(fileInput.files).to.have.length(0)

    await act(async () => {
      fireEvent.change(fileInput, { target: { files: [file] } })
      await new Promise((r) => setTimeout(r, 2000))
    })

    expect(fileInput?.files[0]).toBeInstanceOf(File)
    expect(await screen.findByText('Added file: image.jpg')).toBeTruthy()
    expect(await screen.findByText('Change File')).toBeTruthy()
  })
})
