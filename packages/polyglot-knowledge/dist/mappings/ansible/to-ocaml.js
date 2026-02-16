"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToOcamlRules = void 0;
exports.ansibleToOcaml = ansibleToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "ocaml");
function ansibleToOcaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "ocaml", code);
}
exports.ansibleToOcamlRules = rules;
