import React from "react"

import { InputContainer } from "./styled"

import { Input } from "components"
import { useController } from "react-hook-form"

const SearchInput = () => {
  const { field } = useController({
    name: "keyword",
    defaultValue: "",
  })

  const { onChange, ...initialField } = field

  return (
    <InputContainer>
      <Input
        onChange={onChange}
        {...initialField}
        placeholder="หาที่เที่ยวแล้วไปกับ..."
      />
    </InputContainer>
  )
}

export default SearchInput
