import express, { Express } from "express"
const router = express.Router()
import { getTripsSearch } from "../controller/trips.controller"
import configs from "../core/configs"

const setupRoutes = (app: Express) => {
  router.route("/trips").get(getTripsSearch)

  app.use(configs.basePrefixApi, router)
}

export default setupRoutes
