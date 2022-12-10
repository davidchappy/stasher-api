"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db = tslib_1.__importStar(require("../supabase/adapter"));
const Mutations = {
    addStashable: async (_, args, context) => {
        const { supabase } = context;
        return db.addStashable(supabase, args.link);
    },
    deleteStashable: async (_, args, context) => {
        const { supabase } = context;
        return db.deleteStashable(supabase, args.id);
    },
    updateStashable: async (_, args, context) => {
        const { supabase } = context;
        return db.updateStashable(supabase, args.id, args.link);
    }
};
exports.default = Mutations;
