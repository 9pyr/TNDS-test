import { render } from "@testing-library/react"
import NavBar from "."
import React from "react"
import { FormProvider, useForm } from "react-hook-form"

const Wrapper = ({ children }: React.PropsWithChildren) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe("NavBar", () => {
  it("should render SearchInput component", () => {
    const { getByPlaceholderText } = render(
      <Wrapper>
        <NavBar />
      </Wrapper>
    )

    expect(getByPlaceholderText(/หาที่เที่ยวแล้วไปกับ.../i)).toBeInTheDocument()
  })

  it("should render title", () => {
    const { getByText } = render(
      <Wrapper>
        <NavBar />
      </Wrapper>
    )

    expect(getByText(/เที่ยวไหนดี/i)).toBeInTheDocument()
  })
})
