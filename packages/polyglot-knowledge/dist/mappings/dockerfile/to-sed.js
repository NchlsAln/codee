"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToSedRules = void 0;
exports.dockerfileToSed = dockerfileToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "sed");
function dockerfileToSed(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "sed", code);
}
exports.dockerfileToSedRules = rules;
