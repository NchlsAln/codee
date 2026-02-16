"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToOcamlRules = void 0;
exports.dockerfileToOcaml = dockerfileToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "ocaml");
function dockerfileToOcaml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "ocaml", code);
}
exports.dockerfileToOcamlRules = rules;
