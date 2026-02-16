"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToKotlinRules = void 0;
exports.dockerfileToKotlin = dockerfileToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "kotlin");
function dockerfileToKotlin(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "kotlin", code);
}
exports.dockerfileToKotlinRules = rules;
