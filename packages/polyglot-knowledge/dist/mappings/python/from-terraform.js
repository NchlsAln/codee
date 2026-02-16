"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToPythonRules = void 0;
exports.terraformToPython = terraformToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "python");
function terraformToPython(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "python", code);
}
exports.terraformToPythonRules = rules;
