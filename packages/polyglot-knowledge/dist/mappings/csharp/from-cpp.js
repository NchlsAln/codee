"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToCsharpRules = void 0;
exports.cppToCsharp = cppToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "csharp");
function cppToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "csharp", code);
}
exports.cppToCsharpRules = rules;
