import serverApi from "../core/serverApi"
import express from "express"
import { TripModel } from "./types"
import { constants as httpStatus } from "http2"

export const getTripsSearch = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { query } = req
  const { keyword } = query

  try {
    const { data = [] } = await serverApi.get<TripModel[]>("trips", {
      params: { keyword },
    })

    res.status(httpStatus.HTTP_STATUS_OK).json(data)
  } catch (error) {
    console.error("Error in getTripsSearch controller: ", error)
    res
      .status(httpStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" })
    next(error)
  }
}
