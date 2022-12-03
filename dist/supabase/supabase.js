"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_PROJECT_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const getSupabase = () => {
    const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    return supabase;
};
exports.default = getSupabase;
