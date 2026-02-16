"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToRustRules = void 0;
exports.chefToRust = chefToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "rust");
function chefToRust(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "rust", code);
}
exports.chefToRustRules = rules;
