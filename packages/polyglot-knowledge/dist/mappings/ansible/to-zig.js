"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToZigRules = void 0;
exports.ansibleToZig = ansibleToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "zig");
function ansibleToZig(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "zig", code);
}
exports.ansibleToZigRules = rules;
