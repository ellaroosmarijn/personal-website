import { render, screen } from "@testing-library/react"
import { TextSection } from "./text-section"

describe("TextSection", () => {
  it("renders the text content correctly", () => {
    const textContent = "Hello, World!"
    render(<TextSection>{textContent}</TextSection>)

    const textElement = screen.getByText(textContent)
    expect(textElement).toBeInTheDocument()
  })
})
