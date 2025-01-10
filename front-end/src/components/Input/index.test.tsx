import React from "react"
import { render } from "@testing-library/react"
import Input from "."

const defaultProps = {
  value: "test input",
  onChange: () => {},
}
const setupValues = (propOverrides = {}) => ({
  ...defaultProps,
  ...propOverrides,
})

describe("Input Component", () => {
  it("render has props", () => {
    const props = setupValues()
    const { queryByTestId } = render(<Input {...props} />)

    expect((queryByTestId("input") as HTMLInputElement)?.value).toBe(
      props.value
    )
  })

  it("render props undefined", () => {
    const { queryByTestId } = render(<Input />)

    expect((queryByTestId("input") as HTMLInputElement)?.value).toBe("")
  })
})
