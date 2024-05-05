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

  it("should have disabled styling when the disabled prop is true", () => {
    render(<Button label="Disabled" disabled={true} />)

    const disabledButton = screen.getByText("Disabled")

    expect(disabledButton).toHaveClass("disabled")
    expect(disabledButton).toHaveStyle({
      backgroundColor: "var(--color-grey-400)",
    })
  })

  it("should have loading styling when the loading prop is true", () => {
    render(<Button label="Loading button" loading={true} />)

    const loadingButton = screen.getByText("Loading button")

    expect(loadingButton).toHaveClass("loading")
    expect(loadingButton).toHaveStyle({
      backgroundColor: "var(--color-olive-300)",
    })
  })

  it("should render as Link when href prop is provided", () => {
    render(<Button label="Link" href={"/some-route"} />)

    expect(screen.getByRole("link")).toBeInTheDocument()
  })

  it("should render as button when href prop is not provided", () => {
    render(<Button label="Button" />)

    const regularButton = screen.getByRole("button", { name: "Button" })

    expect(regularButton).toBeInTheDocument()
  })

  it("should add additional classNames to the button", () => {
    const additionalClass = "my-custom-class"
    render(<Button label="Custom Class" className={additionalClass} />)

    expect(screen.getByRole("button", { name: "Custom Class" })).toHaveClass(
      additionalClass
    )
  })
})
