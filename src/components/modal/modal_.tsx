import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { Modal } from "./modal"

describe("Modal", () => {
  // const onCloseMock = jest.fn()
  // afterEach(() => {
  //   onCloseMock.mockClear()
  // })
  // test("renders modal with heading when open is true", () => {
  //   render(<Modal open={true} heading="My Modal" onClose={onCloseMock} />)
  //   const headingElement = screen.getByText("My Modal")
  //   expect(headingElement).toBeInTheDocument()
  // })
  // test("does not render modal when open is false", () => {
  //   render(<Modal open={false} heading="My Modal" onClose={onCloseMock} />)
  //   const headingElement = screen.queryByText("My Modal")
  //   expect(headingElement).not.toBeInTheDocument()
  // })
  // test("calls onClose when Escape key is pressed", () => {
  //   render(<Modal open={true} onClose={onCloseMock} />)
  //   fireEvent.keyDown(window, { key: "Escape", code: "Escape" })
  //   expect(onCloseMock).toHaveBeenCalledTimes(1)
  // })
  // test("renders children", () => {
  //   render(
  //     <Modal open={true} onClose={onCloseMock}>
  //       <div>Modal Content</div>
  //     </Modal>
  //   )
  //   const contentElement = screen.getByText("Modal Content")
  //   expect(contentElement).toBeInTheDocument()
  // })
})
