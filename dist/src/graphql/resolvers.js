"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("./query"));
const mutations_1 = __importDefault(require("./mutations"));
const resolvers = {
    Query: query_1.default,
    Mutation: mutations_1.default
};
exports.default = resolvers;
