"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToZigRules = void 0;
exports.terraformToZig = terraformToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "zig");
function terraformToZig(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "zig", code);
}
exports.terraformToZigRules = rules;
