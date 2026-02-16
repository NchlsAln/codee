"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToCsharpRules = void 0;
exports.kotlinToCsharp = kotlinToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "csharp");
function kotlinToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "csharp", code);
}
exports.kotlinToCsharpRules = rules;
