"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToSasRules = void 0;
exports.chefToSas = chefToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "sas");
function chefToSas(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "sas", code);
}
exports.chefToSasRules = rules;
