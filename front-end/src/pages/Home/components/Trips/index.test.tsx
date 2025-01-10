import { render } from "@testing-library/react"
import Trips from "."
import { vi } from "vitest"
import * as useGetTripsModule from "core/hooks/useGetTrips"
import React from "react"

describe("Trips", () => {
  vi.mock("core/hooks/useGetTrips", () => ({
    __esModule: true,
    default: vi.fn(),
  }))

  vi.mock("components/Card", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }))

  it("should render loading state initially", () => {
    ;(useGetTripsModule.default as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
    })

    const { getByText } = render(<Trips />)

    expect(getByText(/...loading/i)).toBeInTheDocument()
  })

  it("should render empty state if no data", () => {
    ;(useGetTripsModule.default as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    })

    const { getByText } = render(<Trips />)

    expect(getByText(/ไม่พบข้อมูล/i)).toBeInTheDocument()
  })
})
