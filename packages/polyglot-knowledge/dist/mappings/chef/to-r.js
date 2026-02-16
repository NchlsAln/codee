"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToRRules = void 0;
exports.chefToR = chefToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "r");
function chefToR(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "r", code);
}
exports.chefToRRules = rules;
