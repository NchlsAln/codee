"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToRRules = void 0;
exports.dockerfileToR = dockerfileToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "r");
function dockerfileToR(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "r", code);
}
exports.dockerfileToRRules = rules;
