import "dotenv/config"

const configs = {
  endPoint: process.env.JSON_SERVER as string,
  basePrefixApi: process.env.BASE_PREFIX_API as string,
}

export default configs
