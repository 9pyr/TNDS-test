import React from "react"
import { render } from "@testing-library/react"
import Button from "."

const defaultProps = { href: "http://localhost:3000/" }
const setupValues = (propOverrides = {}) => ({
  ...defaultProps,
  ...propOverrides,
})

describe("Button Component", () => {
  it("render has props", () => {
    const props = setupValues()
    const { getByText } = render(<Button {...props}>readme</Button>)

    const btnElement = getByText("readme")

    expect(btnElement).toBeInTheDocument()
    expect(btnElement.closest("a")).toHaveAttribute("href", props.href)
  })

  it("render props undefined", () => {
    const { container } = render(<Button />)

    expect(container.textContent).toBe("")
  })
})
