"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToRustRules = void 0;
exports.puppetToRust = puppetToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "rust");
function puppetToRust(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "rust", code);
}
exports.puppetToRustRules = rules;
