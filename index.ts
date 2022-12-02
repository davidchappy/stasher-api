import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.all("/", (req: Request, res: Response) => {
  console.log("Just got a request!")
  res.send("Express ++ TypeScript Server")
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is listening on port ${port}`)
})
