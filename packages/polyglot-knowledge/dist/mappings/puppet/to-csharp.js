"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToCsharpRules = void 0;
exports.puppetToCsharp = puppetToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "csharp");
function puppetToCsharp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "csharp", code);
}
exports.puppetToCsharpRules = rules;
