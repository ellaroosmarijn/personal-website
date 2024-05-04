import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("renders with a label", () => {
    const label = "Test button"
    render(<Button {...{ label }} />)

    const button = screen.getByRole("button", { name: label })

    expect(button).toBeInTheDocument()
  })

  it("should apply themes", () => {
    render(
      <>
        <Button theme="primary" label="Primary button" />
        <Button theme="secondary" label="Secondary button" />
        <Button theme="ghost" label="Ghost button" />
      </>
    )

    const secondaryButton = screen.getByText("Secondary button")
    const primaryButton = screen.getByText("Primary button")
    const ghostButton = screen.getByText("Ghost button")

    expect(primaryButton).toHaveStyle({
      backgroundColor: "var(--color-olive-700)",
    })

    expect(secondaryButton).toHaveStyle({
      backgroundColor: "var(--color-olive-500)",
    })

    expect(ghostButton).toHaveClass("ghost")
  })

  it("should default to primary theme styling when a theme is undefined", () => {
    render(<Button label="default to primary theme" />)

    const defaultToPrimaryTheme = screen.getByText("default to primary theme")

    expect(defaultToPrimaryTheme).toHaveClass("primary")
  })

  it("should disable the button when disabled prop is true", () => {
    render(<Button label="Disabled" disabled={true} />)

    const disabledButton = screen.getByText("Disabled")

    expect(disabledButton).toBeDisabled()
  })
})
