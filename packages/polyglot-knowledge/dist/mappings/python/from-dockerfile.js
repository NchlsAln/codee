"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToPythonRules = void 0;
exports.dockerfileToPython = dockerfileToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "python");
function dockerfileToPython(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "python", code);
}
exports.dockerfileToPythonRules = rules;
