"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToCsharpRules = void 0;
exports.typescriptToCsharp = typescriptToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "csharp");
function typescriptToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "csharp", code);
}
exports.typescriptToCsharpRules = rules;
