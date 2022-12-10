"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const http_1 = tslib_1.__importDefault(require("http"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const init_1 = tslib_1.__importDefault(require("../supabase/init"));
const express_1 = tslib_1.__importDefault(require("express"));
const fs_1 = require("fs");
const resolvers_1 = tslib_1.__importDefault(require("./resolvers"));
const typeDefs = (0, fs_1.readFileSync)("./graphql/schema.graphql", { encoding: "utf8" });
const startServer = async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers: resolvers_1.default,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })]
    });
    await server.start();
    const supabase = (0, init_1.default)();
    app.use("/", (0, cors_1.default)(), body_parser_1.default.json({ limit: "50mb" }), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => ({
            token: req.headers.token,
            supabase
        })
    }));
    const port = process.env.SERVER_PORT || 8000;
    await new Promise(resolve => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}`);
    return { server, app };
};
exports.default = startServer;
