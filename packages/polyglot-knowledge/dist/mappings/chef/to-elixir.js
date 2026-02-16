"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToElixirRules = void 0;
exports.chefToElixir = chefToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "elixir");
function chefToElixir(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "elixir", code);
}
exports.chefToElixirRules = rules;
