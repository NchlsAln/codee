"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToRustRules = void 0;
exports.terraformToRust = terraformToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "rust");
function terraformToRust(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "rust", code);
}
exports.terraformToRustRules = rules;
