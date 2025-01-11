import React from "react"

import { InputContainer } from "./styled"

import { Input } from "components"
import { useController } from "react-hook-form"

const SearchInput = () => {
  const { field } = useController({
    name: "keyword",
    defaultValue: "",
  })

  return (
    <InputContainer>
      <Input {...field} placeholder="หาที่เที่ยวแล้วไปกับ..." />
    </InputContainer>
  )
}

export default SearchInput
