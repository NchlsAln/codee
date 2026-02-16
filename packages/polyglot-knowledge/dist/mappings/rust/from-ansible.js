"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToRustRules = void 0;
exports.ansibleToRust = ansibleToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "rust");
function ansibleToRust(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "rust", code);
}
exports.ansibleToRustRules = rules;
