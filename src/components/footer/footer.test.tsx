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

  it("renders the links correctly", () => {
    render(<Footer />)
    const projectsLink = screen.getByRole("link", { name: "Projects" })
    const socialsLink = screen.getByRole("link", { name: "Socials" })
    const contactLink = screen.getByRole("link", { name: "Contact" })
    expect(projectsLink).toBeInTheDocument()
    expect(socialsLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })
})
