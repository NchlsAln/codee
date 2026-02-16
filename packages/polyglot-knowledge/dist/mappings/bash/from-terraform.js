"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToBashRules = void 0;
exports.terraformToBash = terraformToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "bash");
function terraformToBash(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "bash", code);
}
exports.terraformToBashRules = rules;
