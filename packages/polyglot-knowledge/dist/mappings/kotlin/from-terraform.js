"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToKotlinRules = void 0;
exports.terraformToKotlin = terraformToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "kotlin");
function terraformToKotlin(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "kotlin", code);
}
exports.terraformToKotlinRules = rules;
