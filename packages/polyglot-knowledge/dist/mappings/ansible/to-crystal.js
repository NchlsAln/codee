"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToCrystalRules = void 0;
exports.ansibleToCrystal = ansibleToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "crystal");
function ansibleToCrystal(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "crystal", code);
}
exports.ansibleToCrystalRules = rules;
