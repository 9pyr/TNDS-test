import { useQuery } from "@tanstack/react-query"
import { getTripsSearch } from "core/apis"
import { useEffect } from "react"
import { useFormContext, useWatch } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

const DELAY = 1000

export default function useGetTrips() {
  const { setValue } = useFormContext()
  const [searchParams, setSearchParams] = useSearchParams()

  const keyword = searchParams.get("keyword") || ""

  const searchValue = useWatch({
    name: "keyword",
    defaultValue: "",
  })

  useEffect(() => {
    setValue("keyword", keyword)
  }, [keyword])

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchValue) {
        setSearchParams({ keyword: searchValue })
      } else {
        setSearchParams({})
      }
    }, DELAY)

    return () => {
      clearTimeout(debounce)
    }
  }, [searchValue])

  return useQuery({
    queryKey: ["trips-", keyword],
    queryFn: () => getTripsSearch(keyword),
  })
}
