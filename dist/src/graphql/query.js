"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db = tslib_1.__importStar(require("../supabase/adapter"));
const Query = {
    stashables: async (_, args, context) => {
        const { supabase } = context;
        return db.getStashables(supabase, args.filter);
    }
};
exports.default = Query;
