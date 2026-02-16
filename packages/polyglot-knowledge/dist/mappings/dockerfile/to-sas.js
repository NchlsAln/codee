"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToSasRules = void 0;
exports.dockerfileToSas = dockerfileToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "sas");
function dockerfileToSas(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "sas", code);
}
exports.dockerfileToSasRules = rules;
