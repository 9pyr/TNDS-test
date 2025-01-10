import React from "react"
import { render, screen } from "@testing-library/react"
import { useForm } from "react-hook-form"
import Form from "."

describe("Form Component", () => {
  it("should render children correctly", () => {
    const TestChild = () => <div data-testid="test-child">Test Child</div>

    render(
      <Form>
        <TestChild />
      </Form>
    )

    const child = screen.getByTestId("test-child")
    expect(child).toBeInTheDocument()
    expect(child).toHaveTextContent("Test Child")
  })

  it("should provide react-hook-form context", () => {
    const TestChild = () => {
      const { register } = useForm()
      return (
        <input
          data-testid="test-input"
          {...register("testField")}
          placeholder="Test Input"
        />
      )
    }

    render(
      <Form>
        <TestChild />
      </Form>
    )

    const input = screen.getByTestId("test-input")
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("placeholder", "Test Input")
  })
})
