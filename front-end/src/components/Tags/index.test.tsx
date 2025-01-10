import React from "react"
import { render } from "@testing-library/react"
import Tags from "."
import { MemoryRouter } from "react-router-dom"

interface TagsProps {
  dataSource: string[]
  renderLink?: (tag: string) => string
}

const defaultProps: TagsProps = {
  dataSource: ["กรุงเทพ", "เกาะ"],
  renderLink: (tag) => `?keyword=${tag}`,
}
const setupValues = (propOverrides = {}) => ({
  ...defaultProps,
  ...propOverrides,
})

describe("Tags Component", () => {
  it("render has props", () => {
    const props = setupValues()
    const { container } = render(
      <MemoryRouter>
        <Tags {...props} />
      </MemoryRouter>
    )

    expect(container.querySelectorAll("a").length).toBe(props.dataSource.length)
  })

  it("render has props and renderLink is undefined", () => {
    const props = setupValues()
    delete props.renderLink

    const { container } = render(
      <MemoryRouter>
        <Tags {...props} />
      </MemoryRouter>
    )

    expect(container.querySelectorAll("a").length).toBe(props.dataSource.length)
  })

  it("render props undefined", () => {
    const { container } = render(
      <MemoryRouter>
        <Tags />
      </MemoryRouter>
    )

    expect(container.querySelectorAll("a").length).toBe(0)
  })
})
