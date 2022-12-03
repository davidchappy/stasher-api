import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import http from "http"
import cors from "cors"
import bodyParser from "body-parser"
import getSupabase from "./supabase/init"
import express, { Express, Request } from "express"

interface Context {
  token?: string
  supabase?: ReturnType<typeof getSupabase>
}

const typeDefs = `#graphql
  type Goodie {
    id: Int
    link: String
    inserted_at: String
    updated_at: String
  }

  type Query {
    goodies: [Goodie]
  }
`

const resolvers = {
  Query: {
    goodies: async (_: any, args: any, context: Context) => {
      const { token, supabase } = context

      const { data, error } = await supabase!.from("goodie").select()

      console.log(data, error)

      return data
    }
  }
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
