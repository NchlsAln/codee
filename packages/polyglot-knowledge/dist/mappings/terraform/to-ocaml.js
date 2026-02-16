"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToOcamlRules = void 0;
exports.terraformToOcaml = terraformToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "ocaml");
function terraformToOcaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "ocaml", code);
}
exports.terraformToOcamlRules = rules;
