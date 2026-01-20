import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting.js";

// This is a suit, that holds, groups more than one test for a component, for example.
describe("Greeting component", () => {

  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    // To this method, you can pass a string or a regular expression.
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders default text if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .. no need

    // Assert
    const defaultText = screen.getByText("It's good to see you!");
    expect(defaultText).toBeInTheDocument();
  });

  test("renders changed text if the button WAS clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    // here we wanna click the button to change the state and change the text before checking
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    // Assert
    const changedText = screen.getByText("Changed!", { exact: false });
    expect(changedText).toBeInTheDocument();
  });

  // Tests if the default text is gone after clicking the button.
  test("delete default text from DOM after CLICKING the button", async () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    await userEvent.click(buttonElement)

    // Assert
    // Different from getByText(), queryByText() can return null, what we need here.
    const defaultText = screen.queryByText("It's good to see you!", { exact: false })
    expect(defaultText).not.toBeInTheDocument()

  })
});
