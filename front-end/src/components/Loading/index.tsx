import React from "react"
import { LoadingStyled } from "./styled"

const Loading = ({ children }: React.PropsWithChildren) => {
  return (
    <LoadingStyled data-testid="loading-testid">
      {children || "...loading"}
    </LoadingStyled>
  )
}

export default Loading
