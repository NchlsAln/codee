"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToCrystalRules = void 0;
exports.terraformToCrystal = terraformToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "crystal");
function terraformToCrystal(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "crystal", code);
}
exports.terraformToCrystalRules = rules;
