import { render, screen } from "@testing-library/react"
import { Footer } from "./footer"

describe("Footer", () => {
  it("renders the footer component", () => {
    render(<Footer />)
    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })
})
