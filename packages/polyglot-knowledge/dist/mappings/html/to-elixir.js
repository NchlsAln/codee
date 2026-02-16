"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToElixirRules = void 0;
exports.htmlToElixir = htmlToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "elixir");
function htmlToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "elixir", code);
}
exports.htmlToElixirRules = rules;
