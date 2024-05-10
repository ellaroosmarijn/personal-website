import { render, screen } from "@testing-library/react"
import { TextSection } from "./text-section"

describe("TextSection", () => {
  it("renders the text content correctly", () => {
    const textContent = "Hello, World!"
    render(<TextSection>{textContent}</TextSection>)

    const textElement = screen.getByText(textContent)
    expect(textElement).toBeInTheDocument()
  })

  it("applies the correct text color class", () => {
    const { rerender } = render(
      <TextSection textColor="white">Test</TextSection>
    )

    const textElement = screen.getByText("Test")
    expect(textElement).toHaveClass("white")

    rerender(<TextSection textColor="black">Test</TextSection>)
    expect(textElement).toHaveClass("black")
  })

  it("applies additional classNames correctly", () => {
    const additionalClassName = "custom-class"
    render(
      <TextSection className={additionalClassName} textColor="black">
        Test
      </TextSection>
    )

    const textElement = screen.getByText("Test")
    expect(textElement.parentElement).toHaveClass(additionalClassName)
  })

  it("spreads additional props correctly", () => {
    const dataTestId = "text-section"
    render(
      <TextSection data-testid={dataTestId} textColor="black">
        Test
      </TextSection>
    )

    const textElement = screen.getByTestId(dataTestId)
    expect(textElement).toBeInTheDocument()
  })
})
