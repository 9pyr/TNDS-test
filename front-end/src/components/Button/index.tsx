import React from "react"
import { ButtonStyled } from "./styled"

interface ButtonProps extends React.ComponentPropsWithoutRef<"a"> {}

const Button = ({
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button
