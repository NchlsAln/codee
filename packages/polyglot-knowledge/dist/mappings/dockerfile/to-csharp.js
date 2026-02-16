"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToCsharpRules = void 0;
exports.dockerfileToCsharp = dockerfileToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "csharp");
function dockerfileToCsharp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "csharp", code);
}
exports.dockerfileToCsharpRules = rules;
