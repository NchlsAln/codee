"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToCsharpRules = void 0;
exports.goToCsharp = goToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "csharp");
function goToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "csharp", code);
}
exports.goToCsharpRules = rules;
