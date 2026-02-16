"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToKotlinRules = void 0;
exports.ansibleToKotlin = ansibleToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "kotlin");
function ansibleToKotlin(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "kotlin", code);
}
exports.ansibleToKotlinRules = rules;
