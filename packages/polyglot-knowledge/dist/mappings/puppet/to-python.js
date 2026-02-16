"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToPythonRules = void 0;
exports.puppetToPython = puppetToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "python");
function puppetToPython(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "python", code);
}
exports.puppetToPythonRules = rules;
