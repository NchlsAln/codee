"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToYamlRules = void 0;
exports.ansibleToYaml = ansibleToYaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "yaml");
function ansibleToYaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "yaml", code);
}
exports.ansibleToYamlRules = rules;
