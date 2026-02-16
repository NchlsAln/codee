"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToJuliaRules = void 0;
exports.chefToJulia = chefToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "julia");
function chefToJulia(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "julia", code);
}
exports.chefToJuliaRules = rules;
