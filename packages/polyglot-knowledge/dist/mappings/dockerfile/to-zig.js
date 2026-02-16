"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToZigRules = void 0;
exports.dockerfileToZig = dockerfileToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "zig");
function dockerfileToZig(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "zig", code);
}
exports.dockerfileToZigRules = rules;
