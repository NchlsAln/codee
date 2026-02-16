"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToElixirRules = void 0;
exports.crystalToElixir = crystalToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "elixir");
function crystalToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "elixir", code);
}
exports.crystalToElixirRules = rules;
