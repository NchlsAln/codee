"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToSedRules = void 0;
exports.chefToSed = chefToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "sed");
function chefToSed(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "sed", code);
}
exports.chefToSedRules = rules;
