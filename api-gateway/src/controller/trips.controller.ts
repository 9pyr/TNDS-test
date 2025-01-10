import serverApi from "../core/serverApi"
import express from "express"
import { isString } from "lodash"
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
    const { data = [] } = await serverApi.get<TripModel[]>("trips")

    let filteredData = data
    if (keyword && isString(keyword)) {
      const pattern = new RegExp(keyword, "i")
      // Filter or search data from keyword
      filteredData = data.filter(
        (item) =>
          pattern.test(item.title) ||
          pattern.test(item.description) ||
          item.tags.includes(keyword)
      )
    }

    res.status(httpStatus.HTTP_STATUS_OK).json(filteredData)
  } catch (error) {
    console.error("Error in getTripsSearch controller: ", error)
    res
      .status(httpStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" })
    next(error)
  }
}
