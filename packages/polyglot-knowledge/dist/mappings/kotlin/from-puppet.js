"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToKotlinRules = void 0;
exports.puppetToKotlin = puppetToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "kotlin");
function puppetToKotlin(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "kotlin", code);
}
exports.puppetToKotlinRules = rules;
