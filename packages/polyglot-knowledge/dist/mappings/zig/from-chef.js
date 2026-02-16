"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToZigRules = void 0;
exports.chefToZig = chefToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "zig");
function chefToZig(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "zig", code);
}
exports.chefToZigRules = rules;
