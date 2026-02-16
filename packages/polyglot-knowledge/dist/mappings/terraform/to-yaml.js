"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToYamlRules = void 0;
exports.terraformToYaml = terraformToYaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "yaml");
function terraformToYaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "yaml", code);
}
exports.terraformToYamlRules = rules;
