"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToSwiftRules = void 0;
exports.dockerfileToSwift = dockerfileToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "swift");
function dockerfileToSwift(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "swift", code);
}
exports.dockerfileToSwiftRules = rules;
