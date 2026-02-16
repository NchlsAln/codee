"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToElixirRules = void 0;
exports.juliaToElixir = juliaToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "elixir");
function juliaToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "elixir", code);
}
exports.juliaToElixirRules = rules;
