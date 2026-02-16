"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToPhpRules = void 0;
exports.chefToPhp = chefToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "php");
function chefToPhp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "php", code);
}
exports.chefToPhpRules = rules;
