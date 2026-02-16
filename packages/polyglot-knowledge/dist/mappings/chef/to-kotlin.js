"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToKotlinRules = void 0;
exports.chefToKotlin = chefToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "kotlin");
function chefToKotlin(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "kotlin", code);
}
exports.chefToKotlinRules = rules;
