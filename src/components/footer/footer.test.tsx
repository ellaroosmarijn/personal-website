import { render, screen } from "@testing-library/react"
import { Footer } from "./footer"

describe("Footer", () => {
  it("renders the footer component", () => {
    render(<Footer />)
    const footer = screen.getByTestId("footer")
    expect(footer).toBeInTheDocument()
  })

  it('renders the "Let\'s get in touch!" button', () => {
    render(<Footer />)

    const touchButton = screen.getByText("Let's get in touch!")

    expect(touchButton).toBeInTheDocument()
  })
})
