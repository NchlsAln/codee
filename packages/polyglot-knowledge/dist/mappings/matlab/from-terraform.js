"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToMatlabRules = void 0;
exports.terraformToMatlab = terraformToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "matlab");
function terraformToMatlab(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "matlab", code);
}
exports.terraformToMatlabRules = rules;
