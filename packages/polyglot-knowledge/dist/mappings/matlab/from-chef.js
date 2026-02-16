"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToMatlabRules = void 0;
exports.chefToMatlab = chefToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "matlab");
function chefToMatlab(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "matlab", code);
}
exports.chefToMatlabRules = rules;
