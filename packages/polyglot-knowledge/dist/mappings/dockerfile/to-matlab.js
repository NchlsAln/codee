"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToMatlabRules = void 0;
exports.dockerfileToMatlab = dockerfileToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "matlab");
function dockerfileToMatlab(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "matlab", code);
}
exports.dockerfileToMatlabRules = rules;
