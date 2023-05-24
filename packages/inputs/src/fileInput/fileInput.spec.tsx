import React from 'react'
import { render, screen } from '@testing-library/react'
import { FileInput } from './fileInput'

describe('FileInput', () => {
  it('renders the upload project image text', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<FileInput text='Upload Project Image' imageData='' setImageData={() => {}} />)
    const textElement = screen.getByText('Upload Project Image')
    expect(textElement).toBeTruthy()
  })

  // it("updates the image data when a file is uploaded", async () => {
  //   const setImageDataMock = jest.fn();
  //   const file = new File(["(⌐□_□)"], "image.jpg", { type: "image/jpeg" });
  //   const fileContent = await new Promise((resolve) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       resolve(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  //   const fileInputProps = {
  //     imageData: "",
  //     setImageData: setImageDataMock,
  //   };
  //   render(<FileInput text='' {...fileInputProps} />);
  //   const inputElement = screen.getByLabelText("file input");
  //   fireEvent.change(inputElement, { target: { files: [file] } });
  //   expect(setImageDataMock).toHaveBeenCalledWith(fileContent);
  // });
})
