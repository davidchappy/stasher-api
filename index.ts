import * as dotenv from "dotenv"
dotenv.config()
dotenv.config({ path: ".env.local" })

import startApollo from "./server"

startApollo()
