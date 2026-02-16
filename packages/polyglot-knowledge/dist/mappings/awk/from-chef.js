"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToAwkRules = void 0;
exports.chefToAwk = chefToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "awk");
function chefToAwk(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "awk", code);
}
exports.chefToAwkRules = rules;
