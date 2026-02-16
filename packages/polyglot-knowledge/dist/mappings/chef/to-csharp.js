"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToCsharpRules = void 0;
exports.chefToCsharp = chefToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "csharp");
function chefToCsharp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "csharp", code);
}
exports.chefToCsharpRules = rules;
