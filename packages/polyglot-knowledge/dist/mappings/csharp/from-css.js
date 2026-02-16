"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToCsharpRules = void 0;
exports.cssToCsharp = cssToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "csharp");
function cssToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "csharp", code);
}
exports.cssToCsharpRules = rules;
