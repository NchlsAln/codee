"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToSasRules = void 0;
exports.puppetToSas = puppetToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "sas");
function puppetToSas(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "sas", code);
}
exports.puppetToSasRules = rules;
