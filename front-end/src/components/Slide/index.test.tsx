import React from "react"
import { render } from "@testing-library/react"
import Slide from "."

describe("Slide Component", () => {
  it("render has children", () => {
    const { queryByTestId } = render(
      <Slide>
        <div>1</div>
      </Slide>
    )

    expect(queryByTestId("button-prev")).toBeNull()
    expect(queryByTestId("button-next")).toBeNull()
  })

  it("render has children more one", () => {
    const { getByText, queryByTestId } = render(
      <Slide>
        <div>test 1</div>
        <div>test 2</div>
      </Slide>
    )
    const button_prev = queryByTestId("button-prev")
    const button_next = queryByTestId("button-next")

    expect(button_prev).not.toBeNull()
    expect(button_next).not.toBeNull()

    const text1Element = getByText(/test 1/i)
    expect(text1Element).toBeInTheDocument()

    button_prev?.click()
    const text2Element = getByText(/test 2/i)
    expect(text2Element).toBeInTheDocument()

    button_next?.click()
    expect(text1Element).toBeInTheDocument()

    button_next?.click()
    expect(text2Element).toBeInTheDocument()
  })

  it("render children undefined", () => {
    const { queryByTestId } = render(<Slide />)

    expect(queryByTestId("button-prev")).toBeNull()
    expect(queryByTestId("button-next")).toBeNull()
  })
})
