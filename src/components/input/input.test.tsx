import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { Input } from "./input"

const placeholder = "Enter text"
const inputValue = "Hello world"
const errorMessage = "Invalid input"

describe("Input component", () => {
  it("renders with different props", () => {
    render(
      <Input
        placeholder={placeholder}
        invalid={false}
        disabled={true}
        info="Extra information"
        clearable={true}
        value={inputValue}
      />
    )

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
    expect(screen.getByTestId("input-clear")).toBeInTheDocument()
    expect(screen.getByText("Extra information")).toBeInTheDocument()
  })

  it("clears the input value when the X icon is clicked", () => {
    render(
      <Input placeholder={placeholder} value={inputValue} clearable={true} />
    )

    const input = screen.getByPlaceholderText(placeholder)

    expect(input).toHaveValue(inputValue)

    fireEvent.click(screen.getByTestId("input-clear"))

    expect(input).toHaveValue("")
  })

  it("updates input value correctly", () => {
    render(
      <Input placeholder={placeholder} clearable={true} value={inputValue} />
    )

    const input = screen.getByPlaceholderText(placeholder)

    fireEvent.change(input, { target: { value: "Hello" } })

    expect(input).toHaveValue("Hello")
  })

  it("disables input when disabled prop is true", () => {
    render(<Input placeholder="Enter text" disabled={true} />)

    const input = screen.getByPlaceholderText("Enter text")

    expect(input).toBeDisabled()
  })

  it("applies error styling and errorMessage when input is in invalid state", () => {
    render(
      <Input
        placeholder={placeholder}
        invalid={true}
        errorMessage={errorMessage}
      />
    )

    const input = screen.getByPlaceholderText(placeholder)
    const errorMessageElement = screen.getByText(errorMessage)

    expect(input).toHaveClass("error")

    expect(input).toHaveStyle({
      color: "var(--color-error)",
    })

    expect(errorMessageElement).toBeInTheDocument()
  })

  it("does not render the X icon when clearable prop is false", () => {
    render(<Input placeholder={placeholder} clearable={false} />)

    expect(screen.queryByTestId("input-clear")).not.toBeInTheDocument()
  })

  it("sets input value to empty string when value prop is initially empty", () => {
    render(<Input placeholder={placeholder} value="" />)

    const input = screen.getByPlaceholderText(placeholder)
    expect(input).toHaveValue("")
  })

  it("renders a text input by default", () => {
    render(<Input placeholder={placeholder} />)
    const input = screen.getByPlaceholderText(placeholder)
    expect(input.tagName).toBe("INPUT")
  })

  it("renders a textarea when large prop is true", () => {
    render(<Input placeholder={placeholder} large={true} />)
    const textarea = screen.getByPlaceholderText(placeholder)
    expect(textarea.tagName).toBe("TEXTAREA")
  })
})
