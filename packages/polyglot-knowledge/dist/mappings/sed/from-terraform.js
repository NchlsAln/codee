"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToSedRules = void 0;
exports.terraformToSed = terraformToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "sed");
function terraformToSed(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "sed", code);
}
exports.terraformToSedRules = rules;
