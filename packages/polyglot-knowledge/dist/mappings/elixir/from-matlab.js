"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToElixirRules = void 0;
exports.matlabToElixir = matlabToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "elixir");
function matlabToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "elixir", code);
}
exports.matlabToElixirRules = rules;
