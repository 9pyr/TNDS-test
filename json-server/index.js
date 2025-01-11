const jsonServer = require("json-server")
const { isString } = require("lodash")
const dotenv = require("dotenv")

dotenv.config()

const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get("/trips", (req, res) => {
  const db = router.db.get("trips")

  const { query } = req
  const { keyword } = query

  let filtered = db.value()
  if (keyword && isString(keyword)) {
    const pattern = new RegExp(keyword, "i")
    filtered = db
      .filter(
        (item) =>
          pattern.test(item.title) ||
          pattern.test(item.description) ||
          item.tags.includes(keyword)
      )
      .value()
  }

  res.json(filtered)
})

server.use(router)

server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running on port ${process.env.PORT}`)
})
