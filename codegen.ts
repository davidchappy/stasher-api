import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "graphql/schema.graphql",
  generates: {
    "graphql/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        contextType: "../server#Context"
      }
    }
  }
}

export default config
