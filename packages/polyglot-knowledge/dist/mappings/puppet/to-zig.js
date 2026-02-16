"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToZigRules = void 0;
exports.puppetToZig = puppetToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "zig");
function puppetToZig(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "zig", code);
}
exports.puppetToZigRules = rules;
