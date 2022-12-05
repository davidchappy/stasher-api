"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
};
exports.default = config;
