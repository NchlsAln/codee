"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToGoRules = void 0;
exports.dockerfileToGo = dockerfileToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "go");
function dockerfileToGo(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "go", code);
}
exports.dockerfileToGoRules = rules;
