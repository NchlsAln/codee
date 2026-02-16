"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToNimRules = void 0;
exports.dockerfileToNim = dockerfileToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "nim");
function dockerfileToNim(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "nim", code);
}
exports.dockerfileToNimRules = rules;
