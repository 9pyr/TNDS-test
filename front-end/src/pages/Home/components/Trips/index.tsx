import React from "react"
import { List } from "components"
import useGetTrips from "core/hooks/useGetTrips"

const Trips = () => {
  const { data = [], isLoading: loading } = useGetTrips()

  return <List dataSource={data} loading={loading} />
}

export default Trips
