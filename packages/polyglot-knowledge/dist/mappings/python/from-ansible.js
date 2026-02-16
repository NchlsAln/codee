"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToPythonRules = void 0;
exports.ansibleToPython = ansibleToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "python");
function ansibleToPython(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "python", code);
}
exports.ansibleToPythonRules = rules;
