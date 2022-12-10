"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const query_1 = tslib_1.__importDefault(require("./query"));
const mutations_1 = tslib_1.__importDefault(require("./mutations"));
const resolvers = {
    Query: query_1.default,
    Mutation: mutations_1.default
};
exports.default = resolvers;
