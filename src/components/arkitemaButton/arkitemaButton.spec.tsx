import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ArkitemaButton } from "./arkitemaButton";

describe("ArkitemaButton", () => {
  const mockProps = {
    text: "Click me",
    onclick: () => {},
  };

  it("renders button text", () => {
    const { getByText } = render(<ArkitemaButton {...mockProps} />);
    expect(getByText(mockProps.text)).toBeTruthy();
  });

  //   test('calls onClick prop when clicked', () => {
  //     render(<ArkitemaButton  {...mockProps}/>)
  //     fireEvent.click(screen.getByText(/click me/i))
  //     expect(mockProps.onclick).toHaveBeenCalledTimes(1)
  //   })

  //   it("calls onClick handler when clicked", () => {
  //     const { getByRole } = render(<ArkitemaButton {...mockProps} />);

  //     console.log('clicl', fireEvent.click(getByRole("button")))
  //     // expect(mockProps.onclick).toHaveBeenCalled();
  //   });
});
