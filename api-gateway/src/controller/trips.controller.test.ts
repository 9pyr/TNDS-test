import request from "supertest"
import express, { Express } from "express"
import { getTripsSearch } from "../controller/trips.controller"
import serverApi from "../core/serverApi"
import { jest } from "@jest/globals"
import { TripModel } from "./types"

jest.mock("../core/serverApi", () => ({
  get: jest.fn<() => Promise<{ data: TripModel[] }>>(),
}))

describe("getTripsSearch Controller", () => {
  let app: Express

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.get("/trips", getTripsSearch)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("should return all trips when no keyword is provided", async () => {
    const mockData = [
      {
        title: "Beach Paradise",
        description: "Sunny beach",
        tags: ["beach", "sun"],
      },
      {
        title: "Mountain Adventure",
        description: "Exciting hike",
        tags: ["mountain", "adventure"],
      },
    ]
    ;(
      serverApi.get as jest.MockedFunction<() => Promise<{ data: TripModel[] }>>
    ).mockResolvedValueOnce({ data: mockData })

    const response = await request(app).get("/trips")

    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockData)
    expect(serverApi.get).toHaveBeenCalledWith("trips", {
      params: { keyword: undefined },
    })
  })

  test("should return an error when serverApi.get fails", async () => {
    const errorMessage = "Internal Server Error"
    ;(
      serverApi.get as jest.MockedFunction<() => Promise<{ data: TripModel[] }>>
    ).mockRejectedValueOnce(new Error(errorMessage))

    const response = await request(app)
      .get("/trips")
      .query({ keyword: "beach" })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe("Internal Server Error")
    expect(serverApi.get).toHaveBeenCalledWith("trips", {
      params: { keyword: "beach" },
    })
  })
})
