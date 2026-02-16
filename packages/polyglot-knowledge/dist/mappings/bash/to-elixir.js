"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToElixirRules = void 0;
exports.bashToElixir = bashToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "elixir");
function bashToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "elixir", code);
}
exports.bashToElixirRules = rules;
