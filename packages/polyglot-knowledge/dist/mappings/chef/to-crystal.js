"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToCrystalRules = void 0;
exports.chefToCrystal = chefToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "crystal");
function chefToCrystal(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "crystal", code);
}
exports.chefToCrystalRules = rules;
