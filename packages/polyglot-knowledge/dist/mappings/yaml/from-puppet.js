"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToYamlRules = void 0;
exports.puppetToYaml = puppetToYaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "yaml");
function puppetToYaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "yaml", code);
}
exports.puppetToYamlRules = rules;
