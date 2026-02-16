"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToNimRules = void 0;
exports.chefToNim = chefToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "nim");
function chefToNim(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "nim", code);
}
exports.chefToNimRules = rules;
