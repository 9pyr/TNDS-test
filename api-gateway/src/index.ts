import tripsRoutes from "./routes/trips.routes"
import express from "express"

export const runApp = () => {
  const app = express()

  app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
  })

  tripsRoutes(app)

  app.get("/", (_req, res) => {
    res.send("OK")
  })

  return app
}
