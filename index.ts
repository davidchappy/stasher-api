import * as dotenv from "dotenv"
dotenv.config()
dotenv.config({ path: ".env.local" })

import cors from "cors"
import express, { Express, Request, Response } from "express"
import getSupabase from "./supabase/init"

const app: Express = express()
const port = process.env.PORT || 3000

const supabase = getSupabase()

app.use(cors())

app.all("/", async (req: Request, res: Response) => {
  console.log("Just got a request!")

  const { data, error } = await supabase.from("goodie").select()

  res.send({ test: "hello world" })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is listening on port ${port}`)
})
