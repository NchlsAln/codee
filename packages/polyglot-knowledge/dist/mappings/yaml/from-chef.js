"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToYamlRules = void 0;
exports.chefToYaml = chefToYaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "yaml");
function chefToYaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "yaml", code);
}
exports.chefToYamlRules = rules;
