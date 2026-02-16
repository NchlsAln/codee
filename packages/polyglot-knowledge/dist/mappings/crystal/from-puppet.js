"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToCrystalRules = void 0;
exports.puppetToCrystal = puppetToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "crystal");
function puppetToCrystal(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "crystal", code);
}
exports.puppetToCrystalRules = rules;
