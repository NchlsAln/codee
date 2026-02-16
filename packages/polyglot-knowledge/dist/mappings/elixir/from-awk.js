"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToElixirRules = void 0;
exports.awkToElixir = awkToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "elixir");
function awkToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "elixir", code);
}
exports.awkToElixirRules = rules;
