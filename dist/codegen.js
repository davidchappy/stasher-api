"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: "src/graphql/schema.graphql",
    generates: {
        "src/graphql/__generated__/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                useIndexSignature: true,
                contextType: "../server#Context"
            }
        }
    }
};
exports.default = config;
