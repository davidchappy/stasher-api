"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = __importStar(require("../supabase/adapter"));
const open_graph_scraper_1 = __importDefault(require("open-graph-scraper"));
const Query = {
    stashables: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
        const { supabase } = context;
        const stashables = yield db.getStashables(supabase, args.filter);
        const returnedStashables = yield Promise.all(stashables.map((stashable) => __awaiter(void 0, void 0, void 0, function* () {
            const ogsOptions = { url: stashable.link || "" };
            try {
                const ogsData = yield (0, open_graph_scraper_1.default)(ogsOptions);
                const ogsResult = ogsData.result;
                const { ogImage, ogTitle, ogDescription, ogType, ogUrl } = ogsResult;
                return Object.assign(Object.assign({}, stashable), { ogResult: { ogImage, ogTitle, ogDescription, ogType, ogUrl } });
            }
            catch (error) {
                console.error(`error scraping OpenGraph data for ${ogsOptions.url}`, error);
                return stashable;
            }
        })));
        return returnedStashables;
    })
};
exports.default = Query;
