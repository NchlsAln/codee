"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToCssRules = void 0;
exports.chefToCss = chefToCss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "css");
function chefToCss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "css", code);
}
exports.chefToCssRules = rules;
