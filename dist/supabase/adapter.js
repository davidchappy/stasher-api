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
exports.updateGoodie = exports.removeGoodie = exports.addGoodie = exports.getGoodies = void 0;
const getGoodies = (supabase, filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const search = filter === null || filter === void 0 ? void 0 : filter.search;
    const { data, error } = yield supabase
        .from("goodie")
        .select("id, link, stash_id");
    // .ilike("link", `%${search}%`)
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.getGoodies = getGoodies;
const addGoodie = (supabase, link) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase.from("goodie").insert({ link });
    console.log({ error });
    if (error) {
        throw new Error(error.message);
    }
    return true;
});
exports.addGoodie = addGoodie;
const removeGoodie = (supabase, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase.from("goodie").delete().eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.removeGoodie = removeGoodie;
const updateGoodie = (supabase, id, link) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = yield supabase.from("goodie").update({ link }).eq("id", id);
    if (error) {
        throw new Error(error.message);
    }
    return true;
});
exports.updateGoodie = updateGoodie;
