"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToElixirRules = void 0;
exports.rToElixir = rToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "elixir");
function rToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "elixir", code);
}
exports.rToElixirRules = rules;
