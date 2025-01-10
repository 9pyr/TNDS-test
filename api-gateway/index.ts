import { runApp } from "./src"

const app = runApp()

app.listen(process.env.PORT, () => {
  console.log(`🚀 : Server running at ${process.env.PORT}`)
})
