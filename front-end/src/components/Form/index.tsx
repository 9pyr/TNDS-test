import React from "react"
import { FormProvider, useForm } from "react-hook-form"

const Form = ({ children }: React.PropsWithChildren) => {
  const methods = useForm()

  return <FormProvider {...methods}>{children}</FormProvider>
}

export default Form
