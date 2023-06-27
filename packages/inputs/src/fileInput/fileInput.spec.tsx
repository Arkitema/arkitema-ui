import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { FileInput } from './fileInput'
import { describe, expect, it, vi } from 'vitest'

describe('FileInput', () => {
  it('renders the upload project image text', () => {
    render(<FileInput text='Upload Project Image' imageData='' setImageData={() => {}} />)
    const textElement = screen.getByText('Upload Project Image')
    expect(textElement).toBeTruthy()
  })
  it('file is uploaded', async () => {
    const setImageDataMock = vi.fn().mockImplementation(()=>{})
    const file = new File(['(⌐□_□)'], 'image.jpg', { type: 'image/jpeg' });
  
    const { getByLabelText } = render(
      <FileInput
        text='Upload Project Image'
        imageData=''
        setImageData={setImageDataMock}
        setUpdateImageData={true}
      />
    );
  
    const fileInput = getByLabelText('file-input') as HTMLInputElement;
    expect(fileInput.files).toBeUndefined();
  
    await act(async () => {
      fireEvent.change(fileInput, { target: { files: [file] } });
      await new Promise((r) => setTimeout(r, 2000));
    });
    expect(fileInput.files[0]).toBeInstanceOf(File);
  });
  
  

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
  //     expect(setImageDataMock).toHaveBeenCalledTimes(1);
  //   });
  // })
})