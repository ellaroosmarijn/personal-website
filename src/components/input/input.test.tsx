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

    expect(screen.getByPlaceholderText(placeholder)).toHaveValue("")
  })
})
