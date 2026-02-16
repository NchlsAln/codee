"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToGoRules = void 0;
exports.chefToGo = chefToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "go");
function chefToGo(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "go", code);
}
exports.chefToGoRules = rules;
