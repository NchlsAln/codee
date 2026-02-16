"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToCsharpRules = void 0;
exports.terraformToCsharp = terraformToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "csharp");
function terraformToCsharp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "csharp", code);
}
exports.terraformToCsharpRules = rules;
