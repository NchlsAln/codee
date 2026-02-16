"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToSasRules = void 0;
exports.terraformToSas = terraformToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "sas");
function terraformToSas(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "sas", code);
}
exports.terraformToSasRules = rules;
