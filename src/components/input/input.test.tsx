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
})
