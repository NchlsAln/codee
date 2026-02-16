"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToCsharpRules = void 0;
exports.ansibleToCsharp = ansibleToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "csharp");
function ansibleToCsharp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "csharp", code);
}
exports.ansibleToCsharpRules = rules;
