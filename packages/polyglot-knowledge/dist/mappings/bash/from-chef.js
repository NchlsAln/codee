"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToBashRules = void 0;
exports.chefToBash = chefToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "bash");
function chefToBash(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "bash", code);
}
exports.chefToBashRules = rules;
