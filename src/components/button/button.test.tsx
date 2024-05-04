import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("renders a heading", () => {
    const label = "Test Button"
    render(<Button {...{ label }} />)

    const button = screen.getByRole("button", { name: label })

    expect(button).toBeInTheDocument()
  })
})
