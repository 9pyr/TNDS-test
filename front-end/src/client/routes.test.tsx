import React from "react"
import Routes from "./routes"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import { vi } from "vitest"
import * as Home from "pages/Home"

describe("Routes", () => {
  vi.mock("pages/Home", () => ({
    default: vi.fn(() => <div>Home Component</div>),
  }))

  it("should render Home component on route", () => {
    render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )

    expect(Home.default).toHaveBeenCalled()
  })
})
