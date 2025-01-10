import request from "supertest"
import express, { Express } from "express"
import tripsRouter from "./trips.routes"
import { getTripsSearch } from "../controller/trips.controller"

jest.mock("../controller/trips.controller")

describe("Trips Router", () => {
  let app: Express

  beforeAll(() => {
    app = express()
    app.use(express.json())
    process.env.BASE_PREFIX_API = "/api"
    tripsRouter(app)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test("GET /api/trips should call getTripsSearch controller", async () => {
    ;(getTripsSearch as jest.Mock).mockImplementation((_req, res) => {
      res.status(200).json({ success: true, data: [] })
    })

    const response = await request(app).get("/api/trips")

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ success: true, data: [] })
    expect(getTripsSearch).toHaveBeenCalledTimes(1)
  })

  test("GET /api/trips should return 404 if route is incorrect", async () => {
    const response = await request(app).get("/api/non-existent-route")

    expect(response.status).toBe(404)
  })
})
