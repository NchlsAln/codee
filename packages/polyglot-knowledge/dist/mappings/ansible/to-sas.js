"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToSasRules = void 0;
exports.ansibleToSas = ansibleToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "sas");
function ansibleToSas(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "sas", code);
}
exports.ansibleToSasRules = rules;
