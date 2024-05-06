import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { Input } from "./input"

describe("Input component", () => {
  it("renders with different props", () => {
    render(
      <Input
        placeholder="Enter text"
        invalid={false}
        disabled={true}
        info="Extra information"
        clearable={true}
        value={"Hello world"}
      />
    )

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
    expect(screen.getByTestId("input-clear")).toBeInTheDocument()
    expect(screen.getByText("Extra information")).toBeInTheDocument()
    expect(screen.getByText("Hello world")).toBeInTheDocument()
  })

  it("clears the input value when the X icon is clicked", () => {
    const placeholder = "Enter text"
    const inputValue = "Hello world"

    render(
      <Input placeholder={placeholder} value={inputValue} clearable={true} />
    )

    expect(screen.getByPlaceholderText(placeholder)).toHaveValue(inputValue)

    fireEvent.click(screen.getByTestId("input-clear"))

    expect(screen.getByPlaceholderText(placeholder)).toHaveValue("")
  })
})
