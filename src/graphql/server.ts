import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import http from "http"
import cors from "cors"
import bodyParser from "body-parser"
import getSupabase from "../supabase/init.js"
import express, { Express, Request } from "express"
import { readFileSync } from "fs"
import resolvers from "./resolvers.js"

const typeDefs = readFileSync("src/graphql/schema.graphql", {
  encoding: "utf8"
})

export interface Context {
  token?: string
  supabase?: ReturnType<typeof getSupabase>
}

const startServer = async () => {
  const app: Express = express()

  const httpServer = http.createServer(app)

  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  const supabase = getSupabase()

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json({ limit: "50mb" }),
    expressMiddleware(server, {
      context: async ({ req }: { req: Request }) => ({
        token: req.headers.token,
        supabase
      })
    })
  )

  const port = process.env.SERVER_PORT || 8000

  await new Promise<void>(resolve => httpServer.listen({ port }, resolve))

  console.log(`🚀 Server ready at http://localhost:${port}`)

  return { server, app }
}

export default startServer
