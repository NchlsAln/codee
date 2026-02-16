"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToYamlRules = void 0;
exports.dockerfileToYaml = dockerfileToYaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "yaml");
function dockerfileToYaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "yaml", code);
}
exports.dockerfileToYamlRules = rules;
