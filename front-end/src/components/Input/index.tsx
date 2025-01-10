import React from "react"
import { InputStyled } from "./styled"

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="d-flex">
      <InputStyled {...props} data-testid="input" type="text" />
    </div>
  )
}

export default Input
