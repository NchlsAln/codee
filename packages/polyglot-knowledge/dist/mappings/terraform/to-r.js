"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToRRules = void 0;
exports.terraformToR = terraformToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "r");
function terraformToR(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "r", code);
}
exports.terraformToRRules = rules;
