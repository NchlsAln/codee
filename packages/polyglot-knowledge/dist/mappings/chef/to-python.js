"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToPythonRules = void 0;
exports.chefToPython = chefToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "python");
function chefToPython(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "python", code);
}
exports.chefToPythonRules = rules;
