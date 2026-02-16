"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToRustRules = void 0;
exports.dockerfileToRust = dockerfileToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "rust");
function dockerfileToRust(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "rust", code);
}
exports.dockerfileToRustRules = rules;
