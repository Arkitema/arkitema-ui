import { render, screen, fireEvent } from "@testing-library/react";
import { FileInput } from "./fileInput";

describe("FileInput", () => {
  it("renders the upload project image text", () => {
    render(<FileInput imageData="" setImageData={() => {}} />);
    const textElement = screen.getByText("Upload Project Image");
    expect(textElement).toBeTruthy();
  });

  it("updates the image data when a file is uploaded", async () => {
    const setImageDataMock = jest.fn();
    const file = new File(["(⌐□_□)"], "image.jpg", { type: "image/jpeg" });
    const fileContent = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
    const fileInputProps = {
      imageData: "",
      setImageData: setImageDataMock,
    };
    render(<FileInput {...fileInputProps} />);
    const inputElement = screen.getByLabelText("file input");
    fireEvent.change(inputElement, { target: { files: [file] } });
    expect(setImageDataMock).toHaveBeenCalledWith(fileContent);
  });
});
