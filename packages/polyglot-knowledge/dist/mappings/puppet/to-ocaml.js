"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToOcamlRules = void 0;
exports.puppetToOcaml = puppetToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "ocaml");
function puppetToOcaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "ocaml", code);
}
exports.puppetToOcamlRules = rules;
