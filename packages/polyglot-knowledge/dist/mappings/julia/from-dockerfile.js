"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToJuliaRules = void 0;
exports.dockerfileToJulia = dockerfileToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "julia");
function dockerfileToJulia(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "julia", code);
}
exports.dockerfileToJuliaRules = rules;
