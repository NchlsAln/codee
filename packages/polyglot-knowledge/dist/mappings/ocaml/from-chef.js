"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToOcamlRules = void 0;
exports.chefToOcaml = chefToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "ocaml");
function chefToOcaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "ocaml", code);
}
exports.chefToOcamlRules = rules;
