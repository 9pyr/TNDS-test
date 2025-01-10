import { render, fireEvent } from "@testing-library/react"
import { useForm, FormProvider } from "react-hook-form"
import SearchInput from "."
import React from "react"

const Wrapper = ({ children }: React.PropsWithChildren) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe("SearchInput", () => {
  it("renders SearchInput and interacts with it(", () => {
    const { getByPlaceholderText } = render(
      <Wrapper>
        <SearchInput />
      </Wrapper>
    )

    const inputElement = getByPlaceholderText(
      "หาที่เที่ยวแล้วไปกับ..."
    ) as HTMLInputElement
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: "Bangkok" } })

    expect(inputElement.value).toBe("Bangkok")
  })
})
