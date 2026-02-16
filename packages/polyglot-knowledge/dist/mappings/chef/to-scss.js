"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToScssRules = void 0;
exports.chefToScss = chefToScss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "scss");
function chefToScss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "scss", code);
}
exports.chefToScssRules = rules;
