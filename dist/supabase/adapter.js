"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStashable = exports.deleteStashable = exports.addStashable = exports.getStashables = void 0;
const getStashables = (supabase, filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const search = filter === null || filter === void 0 ? void 0 : filter.search;
    const { data, error } = yield supabase
        .from("stashable")
        .select("*")
        .order("inserted_at", { ascending: true });
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.getStashables = getStashables;
const addStashable = (supabase, link) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase.from("stashable").insert({ link });
    if (error) {
        throw new Error(error.message);
    }
    return true;
});
exports.addStashable = addStashable;
const deleteStashable = (supabase, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase.from("stashable").delete().eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return true;
});
exports.deleteStashable = deleteStashable;
const updateStashable = (supabase, id, link) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase
        .from("stashable")
        .update({ link })
        .eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return true;
});
exports.updateStashable = updateStashable;
