import React from "react"
import { render } from "@testing-library/react"
import { waitFor } from "@testing-library/dom"
import List from "."
import { MemoryRouter } from "react-router-dom"
import { defaultProps } from "./mock"

const setupValues = (propOverrides = {}) => ({
  ...defaultProps,
  ...propOverrides,
})

describe("List Component", () => {
  it("render has props", async () => {
    const props = setupValues()

    const { queryAllByTestId } = render(
      <MemoryRouter>
        <List {...props} />
      </MemoryRouter>
    )

    await waitFor(() =>
      expect(queryAllByTestId("card-item").length).toBe(props.dataSource.length)
    )
  })
  it("render has dataSource empty", () => {
    const props = setupValues({ dataSource: [] })
    const { getByText } = render(
      <MemoryRouter>
        <List {...props} />
      </MemoryRouter>
    )

    expect(getByText(/ไม่พบข้อมูล/i)).toBeInTheDocument()
  })
  it("render has loading is true", () => {
    const props = setupValues({ loading: true })
    const { queryByTestId } = render(
      <MemoryRouter>
        <List {...props} />
      </MemoryRouter>
    )

    expect(queryByTestId("loading-testid")?.textContent).toBe("...loading")
  })

  it("render props undefined", () => {
    const { queryAllByTestId } = render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    )

    expect(queryAllByTestId("card-item").length).toBe(0)
  })
})
