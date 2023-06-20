import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { FileInput } from './fileInput'
import { describe, expect, it, vi } from 'vitest'

describe('FileInput', () => {
  it('renders the upload project image text', () => {
    render(<FileInput text='Upload Project Image' imageData='' setImageData={() => {}} />)
    const textElement = screen.getByText('Upload Project Image')
    expect(textElement).toBeTruthy()
  })

  // it('updates the image data when a file is uploaded', async () => {
  //   const setImageDataMock = vi.fn().mockImplementation(()=>{})
  //   const file = new File(['(⌐□_□)'], 'image.jpg', { type: 'image/jpeg' })
  //   const fileContent = await new Promise((resolve) => {
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       resolve(reader.result)
  //     }
  //     reader.readAsDataURL(file)
  //   })
  //   const { getByLabelText } = render(<FileInput text='Upload Project Image'  imageData='' setImageData={setImageDataMock} setUpdateImageData={true}/>)
  //   //const fileInput = screen.getByLabelText('file-input');
  //   const fileInput = getByLabelText('file-input') as HTMLInputElement;
  //   console.log('fileInput: ', fileInput)
  //   fireEvent.change(fileInput, { target: { files: [file] } })
  //   await waitFor(() => {
  //     expect(setImageDataMock).toHaveBeenCalledTimes(2);
  //   });
  // })
})