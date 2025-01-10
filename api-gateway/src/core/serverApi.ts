import axios from "axios"
import configs from "./configs"

export default axios.create({
  baseURL: configs.endPoint,
  timeout: 1000,
})
