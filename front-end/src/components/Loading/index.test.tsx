import React from "react"
import { render } from "@testing-library/react"
import Loading from "."

describe("List Component", () => {
  it("render has props", () => {
    const { getByText } = render(<Loading>loading...</Loading>)

    expect(getByText("loading...")).toBeInTheDocument()
  })

  it("render props undefined", () => {
    const { getByText } = render(<Loading />)

    expect(getByText("...loading")).toBeInTheDocument()
  })
})
