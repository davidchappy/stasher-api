"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStashable = exports.deleteStashable = exports.addStashable = exports.getStashables = void 0;
const getStashables = async (supabase, filter = {}) => {
    const search = filter?.search;
    const { data, error } = await supabase
        .from("stashable")
        .select("id, link, stash_id");
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
exports.getStashables = getStashables;
const addStashable = async (supabase, link) => {
    const { error } = await supabase.from("stashable").insert({ link });
    if (error) {
        throw new Error(error.message);
    }
    return true;
};
exports.addStashable = addStashable;
const deleteStashable = async (supabase, id) => {
    const { error } = await supabase.from("stashable").delete().eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return true;
};
exports.deleteStashable = deleteStashable;
const updateStashable = async (supabase, id, link) => {
    const { error } = await supabase
        .from("stashable")
        .update({ link })
        .eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return true;
};
exports.updateStashable = updateStashable;
