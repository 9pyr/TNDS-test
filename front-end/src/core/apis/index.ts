import callApi from "../callApi"
import { TripModel } from "../types"

export const getTripsSearch = async (params: string) => {
  const response = await callApi.get<TripModel[]>("api/trips", {
    params: { keyword: params },
  })

  return response.data
}
