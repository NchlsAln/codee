"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToPhpRules = void 0;
exports.dockerfileToPhp = dockerfileToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "php");
function dockerfileToPhp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "php", code);
}
exports.dockerfileToPhpRules = rules;
