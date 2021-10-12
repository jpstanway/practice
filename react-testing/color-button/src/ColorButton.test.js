// import { render, screen, fireEvent } from "@testing-library/react";
// import ColorButton, { replaceCamelWithSpaces } from "./ColorButton";

test("blank test", () => {});

// test("button has correct initial color", () => {
//   render(<ColorButton />);
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });

//   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

//   expect(colorButton.textContent).toHaveTextContent(
//     "Change to Medium Violet Red"
//   );
// });

// test("initial conditions", () => {
//   render(<ColorButton />);
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });
//   const checkbox = screen.getByRole("checkbox");

//   expect(colorButton).toBeEnabled();

//   expect(checkbox).not.toBeChecked();
// });

// test("checkbox functionality", () => {
//   render(<ColorButton />);
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });
//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

//   fireEvent.click(checkbox);
//   expect(checkbox).toBeChecked();
//   expect(colorButton).toBeDisabled();
//   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

//   fireEvent.click(checkbox);
//   expect(checkbox).not.toBeChecked();
//   expect(colorButton).toBeEnabled();
//   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
// });

// describe("spaces before camel case capital letters", () => {
//   test("Works for no inner capital letters", () => {
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });
//   test("Works for one inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });
//   test("Works for multiple inner cpaital letters", () => {
//     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });
